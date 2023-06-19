export const MovieInfo = ({movie}) => {
    return (
        <div>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : ''}
        alt={movie.original_title}
      />
      <ul>
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
      </ul>
    </div>
    )
}