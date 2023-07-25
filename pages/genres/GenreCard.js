/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
// import { Button } from 'react-bootstrap';

const GenreCard = ({
  id,
  description,
}) => (
  <Card className="text-center">
    <Card.Body>
      <Link href={`/genres/${id}`}>
        <a style={{ fontSize: '14px' }}>{description}</a>
      </Link>
    </Card.Body>
  </Card>
);

GenreCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default GenreCard;
