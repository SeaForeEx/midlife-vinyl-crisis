/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { getSingleOrderProduct, deleteOrderProduct } from '../../utils/data/orderProductData';

const OrderProductCard = ({
  id,
  orderId,
  productId,
  quantity,
  qtyTotal,
  onUpdate,
}) => {
  const deleteThisOrderProduct = () => {
    if (window.confirm('Delete Product?')) {
      deleteOrderProduct(id).then(() => onUpdate());
    }
  };

  const [orderProductDetails, setOrderProductDetails] = useState({});

  useEffect(() => {
    getSingleOrderProduct(id).then((productData) => {
      setOrderProductDetails(productData);
    });
  }, [id]);

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <p>Order Id: {orderProductDetails.orderId}</p>
          <p>Product Id: {orderProductDetails.productId}</p>
          <p>Quantity: {orderProductDetails.quantity}</p>
        </Card.Body>
      </Card>
      <Button
        style={{ margin: '10px', backgroundColor: '#003049' }}
        onClick={deleteThisOrderProduct}
      >
        Delete From Cart
      </Button>
    </>
  );
};

OrderProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  orderId: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  qtyTotal: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default OrderProductCard;
