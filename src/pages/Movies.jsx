import { useEffect, useState } from 'react';
import { getSearchMovie } from '../services/api';
import SearchMovieForm from 'components/SearchMoviesForm/SearchMovieForm';
import { MoviesList } from '../components/MoviesList/MoviesList';
export default function Movies() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function loadSearchMovies(search) {
      setIsLoading(true);
      setError(null);
      try {
        const { results } = await getSearchMovie(search);
        setMovies(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadSearchMovies(search);
  }, [search]);

  const handleSearch = search => {
    setSearch(search);
  };

  return (
    <>
      <SearchMovieForm onSubmit={handleSearch} />
      {isLoading ? <p>Loading...</p> : <MoviesList movies={movies} />}
    </>
  );
}
