import { useEffect,useState } from "react";
import {getMovieDetails} from "../services/api"
export default function MovieDetails () {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function loadMovieDetails() {
      setIsLoading(true);
      setError(null);
            try {
                const { genres, original_title, overview, poster_path, release_date, vote_average } = await getMovieDetails(id); 
                const releaseYear = release_date.slice(0, 4);
                const votePercentage = vote_average * 10;
          setMovie({
          genres: genres.map((genre) => genre.name),
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
    },[id]);
    return (
        <div>
            <img src={movie.poster_path} alt={movie.original_title} />
            <ul>
               <li>
                    <h1>{movie.original_title} {movie.releaseYear}</h1>
                    <p>User Score:{movie.votePercentage}%</p>
                </li>
                <li>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                </li>
                <li>
                    <h2>Genres</h2>
                    <p>{movie.genre.name}</p>
                </li>
            </ul>
        </div>
    )
}