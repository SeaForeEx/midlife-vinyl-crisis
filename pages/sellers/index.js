import React, { useState, useEffect } from 'react';
import { getUsers } from '../../utils/data/userData';
import SellerCard from './SellerCard';

function Sellers() {
  const [sellers, setSellers] = useState([]);

  const displaySellers = () => {
    getUsers()
      .then((data) => {
        setSellers(data);
      })
      .catch((error) => {
        console.error('Error fetching sellers:', error);
      });
  };
  useEffect(() => {
    displaySellers();
  }, []);

  return (
    <article className="text-center my-4" id="users">
      <h1 style={{ marginTop: '40px' }}>Sellers</h1>

      <div className="text-center my-4 d-flex">
        {sellers.map((user) => (
          <section
            key={`user--${user.id}`}
            className="user"
          >
            <SellerCard
              id={user.id}
              userName={user.user_name}
              profileImageUrl={user.profile_image_url}
              createdOn={user.created_on}
              email={user.email}
              bio={user.bio}
              uid={user.uid}
            />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Sellers;
