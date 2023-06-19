import { NavLink, Route, Routes } from 'react-router-dom';
import { Header } from './App.styled';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';
import { ToastContainer } from 'react-toastify';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
