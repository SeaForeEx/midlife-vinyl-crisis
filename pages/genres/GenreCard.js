import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
// import { Button } from 'react-bootstrap';

const GenreCard = ({
  id,
  description,
}) => (
  <Card className="text-center">
    <Card.Header>{description}</Card.Header>
    <Card.Body>
      <Card.Title style={{ fontSize: '14px' }}>Genre Id: {id}</Card.Title>
      <Card.Text style={{ fontSize: '12px' }}>
        List of Inventory in This Genre
      </Card.Text>
    </Card.Body>
  </Card>
);

GenreCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default GenreCard;
