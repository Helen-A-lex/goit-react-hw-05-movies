import { useEffect, useState } from 'react';
import { getAllTrendingMovie } from '../services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Message } from 'components/Message/Message';
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      setIsLoading(true);
      setError(null);
      try {
        const { results } = await getAllTrendingMovie();
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading ? (
        <Message>Loading...</Message>
      ) : (
        <MoviesList movies={movies} />
      )}
      {error && <Message>{error}</Message>}
    </div>
  );
}
