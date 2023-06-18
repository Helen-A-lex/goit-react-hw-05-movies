import { NavLink, Route, Routes } from 'react-router-dom';
import { Header } from './App.styled';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { ToastContainer } from 'react-toastify';
export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          {/* <NavLink to="/movies/id">MoviesDetails</NavLink> */}
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route
          path="/movies/:movieId/reviews"
          element={<div>Movies element reviews</div>}
        />
        <Route
          path="/movies/:movieId/cast"
          element={<div>Movies element cast</div>}
        />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
