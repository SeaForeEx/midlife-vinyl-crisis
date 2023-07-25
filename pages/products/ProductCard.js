/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { deleteProduct, getSingleProduct } from '../../utils/data/productData';
import { useAuth } from '../../utils/context/authContext';

const ProductCard = ({
  id,
  title,
  onUpdate,
}) => {
  const deleteThisProduct = () => {
    if (window.confirm('Delete Product?')) {
      deleteProduct(id).then(() => onUpdate());
    }
  };
  const router = useRouter();
  const { user } = useAuth();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    getSingleProduct(id).then((productData) => {
      setProductDetails(productData);
    });
  }, [id]);

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Link href={`/products/${id}`}>
            <a style={{ fontSize: '14px' }}>{title}</a>
          </Link>
        </Card.Body>
      </Card>
      {user.id === productDetails.seller_id
        ? (
          <>
            <Button
              style={{ margin: '10px', backgroundColor: '#003049' }}
              onClick={() => {
                router.push(`/products/edit/${id}`);
              }}
            >
              Edit Product
            </Button>
            <Button
              style={{ margin: '10px', backgroundColor: '#003049' }}
              onClick={deleteThisProduct}
            >
              Delete Product
            </Button>
          </>
        )
        : (
          <Button
            onClick={() => {
              router.push('/cart');
            }}
            style={{
              margin: '10px', backgroundColor: '#6699CC', fontSize: '10px', width: '90px',
            }}
          >
            Add To Cart
          </Button>
        )}
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProductCard;
