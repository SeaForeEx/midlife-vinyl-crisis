import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const OrderConfirmed = () => {
  const router = useRouter();
  return (
    <>
      <div>Order Confirmed</div>
      <p>Thank You for Shopping With Midlife Vinyl Crisis!</p>
      <Button
        onClick={() => {
          router.push('/');
        }}
      >
        Continue Shopping
      </Button>
    </>
  );
};

export default OrderConfirmed;
