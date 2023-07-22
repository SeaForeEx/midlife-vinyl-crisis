import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const RecordCard = ({
  id,
  sellerId,
  genreId,
  title,
  description,
  qtyAvailable,
  price,
  addedOn,
}) => {
  const router = useRouter();

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
      </div>

    </Card>
  );
};

RecordCard.propTypes = {
  id: PropTypes.number.isRequired,
  sellerId: PropTypes.string.isRequired,
  genreId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  qtyAvailable: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  addedOn: PropTypes.string.isRequired,
};

export default RecordCard;
