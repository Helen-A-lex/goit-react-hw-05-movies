import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from '../services/api';
import {  Link, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Message } from 'components/Message/Message';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { TiArrowLeftThick } from "react-icons/ti";
export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/")
  
  useEffect(() => {
    async function loadMovieDetails() {
      setIsLoading(true);
      setError(null);
      try {
        const {
          genres,
          original_title,
          overview,
          poster_path,
          release_date,
          vote_average,
        } = await getMovieDetails(movieId);
        const releaseYear = release_date.slice(0, 4);
        const votePercentage = Math.round(vote_average * 10);

        setMovie({
          genres: genres.map(genre => genre.name).join(' '),
          original_title,
          overview,
          poster_path,
          releaseYear,
          votePercentage,
        });
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError('Oops! Something went wrong! Try reloading the page!');
        }
      } finally {
        setIsLoading(false);
      }
    }
    loadMovieDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}><button><TiArrowLeftThick/> Go back</button></Link>
      {isLoading ? <Message>Loading...</Message> : <MovieInfo movie={movie} />}
      {error && <Message>{error}</Message>}
      <AdditionalInformation/>
    </>
  );
}
