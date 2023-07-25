import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const SellerCard = ({
  id,
  userName,
  email,
  profileImageUrl,
  bio,
}) => {
  const router = useRouter();

  return (
    <Card className="text-center" style={{ width: '220px' }}>
      <Card.Img variant="top" src={profileImageUrl} alt={userName} style={{ height: '250px' }} />
      <div style={{ padding: '10px 0' }}> {/* Add a container div for the header and body */}
        <Card.Header>{userName}</Card.Header>
        <Card.Body style={{ height: '100px' }}>
          <Card.Title style={{ fontSize: '14px' }}>{email}</Card.Title>
          <Card.Text style={{ fontSize: '12px' }}>
            {bio}
          </Card.Text>
        </Card.Body>
      </div>
      <div className="d-flex">
        <Button
          onClick={() => {
            router.push(`/sellers/${id}`);
          }}
          style={{
            margin: '10px', backgroundColor: '#6699CC', fontSize: '10px', width: '90px',
          }}
        >
          View Inventory
        </Button>
      </div>

    </Card>
  );
};

SellerCard.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  profileImageUrl: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SellerCard;
