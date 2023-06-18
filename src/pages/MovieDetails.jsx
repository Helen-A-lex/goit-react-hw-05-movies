import { useEffect,useState } from "react";
import {getMovieDetails} from "../services/api"
import { useParams } from "react-router-dom";
export default function MovieDetails () {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState([]);
    const {movieId} = useParams();
    console.log(movieId);
    useEffect(() => {
        async function loadMovieDetails() {
       setIsLoading(true);
      setError(null);
            try {
                const { genres, original_title, overview, poster_path, release_date, vote_average } = await getMovieDetails(movieId); 
                const releaseYear = release_date.slice(0, 4);
                const votePercentage = vote_average * 10;
               
          setMovie({
          genres: genres.map((genre) => genre.name).join(" "),
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
    },[movieId]);
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.original_title} />
            <ul>
               <li>
                    <h1>{movie.original_title} ({movie.releaseYear})</h1>
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
            </ul>
        </div>
    )
}