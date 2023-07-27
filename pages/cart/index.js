import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import getOrderByCustomerId from '../../utils/data/orderData';
import { getOrderProductsByOrderId } from '../../utils/data/orderProductData';
import OrderProductCard from '../orderProducts/OrderProductCard';

const Cart = () => {
  const router = useRouter();
  const [orderProducts, setOrderProducts] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null); // State to store order details (including order ID)

  useEffect(() => {
    // Fetch order details by customer ID here and update the state
    getOrderByCustomerId()
      .then((orderData) => {
        setOrderDetails(orderData);

        // Fetch order products by order ID here and update the state
        getOrderProductsByOrderId(orderData.orderId)
          .then((orderProductsData) => {
            setOrderProducts(orderProductsData);
          })
          .catch((error) => console.error('Error fetching order products:', error));
      })
      .catch((error) => console.error('Error fetching order details:', error));
  }, []);

  return (
    <>
      <div>Shopping Cart</div>
      {orderProducts.map((orderProduct) => (
        <div key={orderProduct.id}>
          <OrderProductCard
            id={orderDetails.id}
            orderId={orderProducts.order_id}
            productId={orderProducts.product_id}
            quantity={orderProducts.quantity}
            qtyTotal={orderProducts.order_id}
          />
        </div>
      ))}
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

export default Cart;
