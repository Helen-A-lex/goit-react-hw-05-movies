import { Link } from 'react-router-dom';
export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({id, original_name, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            {original_name || title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
 