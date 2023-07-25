import React, { useState, useEffect } from 'react';

import { getAllProducts } from '../utils/data/productData';
import ProductCard from './products/ProductCard';

function Home() {
  const [records, setRecords] = useState([]);

  const displayRecords = () => {
    getAllProducts()
      .then((data) => {
        setRecords(data);
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  };
  useEffect(() => {
    displayRecords();
  }, []);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
      >
        <h1>Welcome to Midlife Vinyl Crisis!</h1>
        <p>Check Out Our New Releases!</p>
      </div>
      <div>
        {records.map((record) => (
          <section
            key={`record--${record.id}`}
            className="record"
            style={{ margin: '40px' }}
            id="record-section"
          >
            <ProductCard
              id={record.id}
              sellerId={record.seller_id}
              genreId={record.genre_id}
              title={record.title}
              description={record.description}
              qtyAvailable={record.qty_available}
              price={record.price}
              addedOn={record.added_on}
              onUpdate={displayRecords}
            />
          </section>
        ))}
      </div>
    </>
  );
}

export default Home;
