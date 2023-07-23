import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { deleteProduct } from '../../utils/data/productData';

const ProductCard = ({
  id,
  sellerId,
  genreId,
  title,
  description,
  qtyAvailable,
  price,
  addedOn,
}) => {
  const deleteThisProduct = () => {
    if (window.confirm('Delete Product?')) {
      deleteProduct(id).then(() => {
        ('Product Deleted');
      });
    }
  };
  const router = useRouter();
  const { user } = useAuth();

  return (
    <Card className="text-center">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title style={{ fontSize: '14px' }}>{description}</Card.Title>
        <Card.Text style={{ fontSize: '12px' }}>
          <div>Genre: {genreId}</div>
          <div>Seller: {sellerId}</div>
          <div>Price: {price}</div>
          <div>Qty Available: {qtyAvailable}</div>
          <div>Added To Site: {addedOn}</div>
          <div>Inventory Number: {id}</div>
        </Card.Text>
      </Card.Body>
      <div className="d-flex">
        {user.id === sellerId
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

    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  sellerId: PropTypes.number.isRequired,
  genreId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  qtyAvailable: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  addedOn: PropTypes.string.isRequired,
};

export default ProductCard;
