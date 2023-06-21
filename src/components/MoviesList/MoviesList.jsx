import { Link, useLocation } from 'react-router-dom';
import { List, Item } from './MovieList.styled';
import PropTypes from 'prop-types';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <List>
      {movies.map(({ id, name, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {name || title}
          </Link>
        </Item>
      ))}
    </List>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
