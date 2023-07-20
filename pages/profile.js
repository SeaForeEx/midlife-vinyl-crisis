import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth(); // retrieves user object from the useAuth hook

  return (
    <>
      <p><img src={user.profile_image_url} alt={user.user_name} /></p>
      <h1>{user.user_name}</h1>
      <h4>{user.email}</h4>
      <p>{user.bio}</p>
      <h2><u>Inventory</u></h2>
    </>
  );
}
