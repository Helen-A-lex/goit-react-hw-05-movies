import { ListInfo, Wrapper } from './MovieInfo.styled';
import PropTypes from 'prop-types';
import imagePlaceholder from '../../image-placeholder/img-placeholder.png';
export const MovieInfo = ({ movie }) => {
  return (
    <Wrapper>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : imagePlaceholder
        }
        alt={movie.original_title}
        width="200"
      />
      <ListInfo>
        <li>
          <h1>
            {movie.original_title} ({movie.releaseYear})
          </h1>
          <p>User Score: {movie.votePercentage}%</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </li>
        <li>
          <h2>Genres</h2>
          <p>{movie.genres}</p>
        </li>
      </ListInfo>
    </Wrapper>
  );
};
MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    releaseYear: PropTypes.string,
    votePercentage: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.string,
  }).isRequired,
};
