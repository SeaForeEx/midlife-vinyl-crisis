import React, { useState, useEffect } from 'react';
import GenreCard from './GenreCard';
import getAllGenres from '../../utils/data/genreData';

function Genres() {
  const [genres, setGenres] = useState([]);

  const displayGenres = () => {
    getAllGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
      });
  };
  useEffect(() => {
    displayGenres();
  }, []);

  return (
    <article className="text-center my-4" id="users">
      <h1 style={{ marginTop: '40px' }}>Genres</h1>

      <div className="text-center">
        {genres.map((genre) => (
          <section
            key={`genre--${genre.id}`}
            className="genre"
            id="record-section"
          >
            <GenreCard
              id={genre.id}
              description={genre.description}
            />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Genres;
