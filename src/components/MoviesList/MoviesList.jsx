import { Link } from 'react-router-dom';
import { List, Item } from './MovieList.styled';
import PropTypes from 'prop-types';
export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({id, name, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`}>
            {name || title}
          </Link>
        </Item>
      ))}
    </List>
  );
};
MoviesList.propTypes = {
   movies: PropTypes.arrayOf(PropTypes.shape()).isRequired
 }