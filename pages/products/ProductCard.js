/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const ProductCard = ({
  id,
  title,
}) => (
  <Card className="text-center">
    <Card.Body>
      <Link href={`/products/${id}`}>
        <a style={{ fontSize: '14px' }}>{title}</a>
      </Link>
    </Card.Body>
  </Card>
);

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductCard;
