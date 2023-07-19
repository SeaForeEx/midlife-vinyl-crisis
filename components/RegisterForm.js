import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth';

function RegisterForm({ user, updateUser }) {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    profile_image_url: '',
    bio: '',
    uid: user.uid,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then(() => updateUser(user.uid));
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
        Register
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
