import { Route, Routes, Navigate} from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound';
import { ToastContainer } from 'react-toastify';
const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
};
