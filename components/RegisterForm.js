/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { registerUser } from '../utils/auth';
import { updateUser } from '../utils/data/userData';

function RegisterForm({ user }) {
  const router = useRouter();
  // Set default values for the formData state based on the user prop
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    profile_image_url: '',
    bio: '',
    uid: '',
  });

  // Update the formData state when the user prop changes
  useEffect(() => {
    if (user) {
      console.warn('useEffect', user.id);
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: user.id,
        user_name: user.user_name || '',
        email: user.email || '',
        profile_image_url: user.profile_image_url || '',
        bio: user.bio || '',
        uid: user.uid || '',
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there is an existing user object
    if (user.id) {
      updateUser(formData)
        .then(() => router.push('/profile'));
      console.warn(user);
    } else {
      registerUser(formData)
        .then(() => router.push('/'));
      console.warn(user);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          name="user_name"
          required
          value={formData.user_name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control
          name="profile_image_url"
          required
          value={formData.profile_image_url}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>User Bio</Form.Label>
        <Form.Control
          as="textarea"
          name="bio"
          required
          placeholder="Enter your Bio"
          value={formData.bio}
          onChange={handleInputChange}
        />
        <Form.Text className="text-muted">Tell us a bit about yourself, fellow Wax Dad...</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
    user_name: PropTypes.string,
    email: PropTypes.string,
    profile_image_url: PropTypes.string,
    bio: PropTypes.string,
  }),
};

export default RegisterForm;
