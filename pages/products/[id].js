import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const ViewProduct = () => {
  const router = useRouter();
  return (
    <>
      <div>Shopping Cart</div>
      <Button
        onClick={() => {
          router.push('/confirmOrder');
        }}
      >
        Checkout
      </Button>
    </>
  );
};

export default ViewProduct;
