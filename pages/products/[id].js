import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getSingleProduct, deleteProduct } from '../../utils/data/productData';
import { useAuth } from '../../utils/context/authContext';

const ViewProduct = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState({});
  const { id } = router.query;
  const { user } = useAuth();
  const deleteThisProduct = () => {
    if (window.confirm('Delete Product?')) {
      deleteProduct(id).then(() => {
        ('Product Deleted');
      });
    }
  };

  useEffect(() => {
    getSingleProduct(id).then((productData) => {
      setProductDetails(productData);
    });
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <h3>
            {productDetails.title}
          </h3>
          <h5>{productDetails.description}</h5>
          <p>Genre: {productDetails.genre_id}</p>
          <p>Seller: {productDetails.seller_id}</p>
          <p>Qty: {productDetails.qty_available}</p>
          <p>Price: ${productDetails.price}</p>
          <p>Added On: {productDetails.added_on}</p>
        </div>
      </div>
      <div className="d-flex">
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
      </div>
    </>
  );
};

export default ViewProduct;
