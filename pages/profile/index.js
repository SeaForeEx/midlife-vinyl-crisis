/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getProductsBySellerId } from '../../utils/data/productData';
import ProductCard from '../products/ProductCard';

const Profile = () => {
  const { user } = useAuth(); // retrieves user object from the useAuth hook
  const router = useRouter();
  const [sellerProducts, setSellerProducts] = useState([]);

  const displayProducts = () => {
    getProductsBySellerId(user.uid).then((data) => setSellerProducts(data));
  };

  useEffect(() => {
    displayProducts();
  }, [user]);

  return (
    <>
      <p>
        <img src={user.profile_image_url} alt={user.user_name} />
      </p>
      <h1>{user.user_name}</h1>
      <h4>{user.email}</h4>
      <p>{user.bio}</p>
      <p>{user.id}</p>
      <Button
        onClick={() => {
          router.push(`/profile/edit/${user.id}`);
        }}
      >
        Edit User
      </Button>
      <Button
        onClick={() => {
          router.push('/products/new');
        }}
      >
        Add a Record
      </Button>
      <h2>
        <u>Inventory</u>
      </h2>
      {sellerProducts.map((product) => (
        <section key={`product--${product.id}`} className="product">
          <ProductCard
            id={product.id}
            sellerId={product.seller_id}
            genreId={product.genre_id}
            title={product.title}
            description={product.description}
            qtyAvailable={product.qty_available}
            price={product.price}
            addedOn={product.added_on}
            onUpdate={displayProducts}
            sellerUserId={product.seller_user_id}
          />
        </section>
      ))}
    </>
  );
};

export default Profile;
