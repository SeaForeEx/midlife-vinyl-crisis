/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProductsByGenreId } from '../../utils/data/productData';
import ProductCard from '../products/ProductCard';

const GenreView = () => {
  const router = useRouter();
  const { id } = router.query;
  const [genreProducts, setGenreProducts] = useState([]);

  const displayProducts = () => {
    getProductsByGenreId(id).then((data) => setGenreProducts(data));
  };

  useEffect(() => {
    displayProducts();
  }, [id]);

  return (
    <>
      {genreProducts.map((product) => (
        <section key={`product--${product.id}`} className="product">
          <ProductCard
            id={product.id}
            sellerId={product.seller_id}
            genreId={product.genre_id}
            title={product.title}
            description={product.description}
            qtyAvailable={product.qty_available}
            price={product.price}
            addedOn={product.added_on}
            onUpdate={displayProducts}
          />
        </section>
      ))}
    </>
  );
};

export default GenreView;
