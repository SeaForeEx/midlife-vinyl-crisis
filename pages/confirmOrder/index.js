import React from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const ConfirmOrder = () => {
  const router = useRouter();
  return (
    <>
      <div>Confirm Order</div>
      <Button
        onClick={() => {
          router.push('/orderConfirmed');
        }}
      >
        Confirm Order
      </Button>
    </>
  );
};

export default ConfirmOrder;
