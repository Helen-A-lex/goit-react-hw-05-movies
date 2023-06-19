import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import { Message } from 'components/Message/Message';
import imagePlaceholder from '../../image-placeholder/img-placeholder.png';

export default function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function loadMovieCast() {
      setIsLoading(true);
      setError(null);
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadMovieCast();
  }, [movieId]);
  return (
    <>
      {isLoading ? (
        <Message>Loading...</Message>
      ) : (
        <section>
          <ul>
            {casts.map(({ id, name, character, profile_path }) => {
              const imageUrl = profile_path
                ? `https://image.tmdb.org/t/p/w92${profile_path}`
                : imagePlaceholder;
              return (
                <li key={id}>
                  <img src={imageUrl} alt={name} width="92" />
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        </section>
      )}
      {error && <Message>{error}</Message>}
    </>
  );
}
