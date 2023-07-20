/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';

const Profile = () => {
  const { user } = useAuth(); // retrieves user object from the useAuth hook
  const router = useRouter();

  return (
    <>
      <p>
        <img src={user.profile_image_url} alt={user.user_name} />
      </p>
      <h1>{user.user_name}</h1>
      <h4>{user.email}</h4>
      <p>{user.bio}</p>
      <Button
        onClick={() => {
          router.push(`/profile/edit/${user.id}`);
        }}
      >
        Edit User
      </Button>
      <h2>
        <u>Inventory</u>
      </h2>
    </>
  );
};

export default Profile;
