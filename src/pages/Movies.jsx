import { useEffect, useState } from 'react';
import { getSearchMovie } from '../services/api';
import SearchMovieForm from 'components/SearchMoviesForm/SearchMovieForm';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Message } from 'components/Message/Message';
export default function Movies() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    async function loadSearchMovies(search, signal) {
      setIsLoading(true);
      setError(null);
      try {
        if (search === '') {
          setMovies([]);
          setIsEmpty(false);
          return;
        }
        const { results } = await getSearchMovie({ search, abortCtrl: signal });
        setMovies(results);
        if (!results.length) {
          setIsEmpty(true);
          return;
        } else {
          setIsEmpty(false);
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadSearchMovies(search, abortCtrl.signal);
    return () => {
      abortCtrl.abort();
    };
  }, [search]);

  const handleSearch = search => {
    setSearch(search);
  };

  return (
    <>
      <SearchMovieForm onSubmit={handleSearch} />

      {isLoading ? (
        <Message>Loading...</Message>
      ) : (
        <>{<MoviesList movies={movies} />}</>
      )}
      {error && <Message>{error}</Message>}
      {isEmpty && <Message>Sorry. There are no movies ...</Message>}
    </>
  );
}
