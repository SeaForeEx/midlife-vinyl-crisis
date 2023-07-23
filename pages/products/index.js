import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getAllProducts } from '../../utils/data/productData';

function Records() {
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
    <article className="text-center my-4" id="users">
      <h1 style={{ marginTop: '40px' }}>Records</h1>

      <div className="text-center my-4 d-flex">
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
    </article>
  );
}

export default Records;
