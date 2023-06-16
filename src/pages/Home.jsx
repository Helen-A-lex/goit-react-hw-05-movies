import { useEffect, useState } from "react";
import { getAllTrendingMovie} from "../services/api";
import { Link } from "react-router-dom";
export default function Home ()  {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
      setIsLoading(true);
      setError(null);
            try {
                const {results} = await getAllTrendingMovie(); 
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
    }, [])

    return (
        <div>
            <h1>Trending Today</h1>
            {isLoading ? <p>Loading...</p>:
            <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_name || movie.original_title}</Link>
          </li>
        ))}
      </ul>}
  </div>
    )
}
;