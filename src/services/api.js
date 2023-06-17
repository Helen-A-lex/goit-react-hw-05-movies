import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzJiYzk4YjBmNGM1MTljMmM4ZjMxYjVhMWE0NGRkZCIsInN1YiI6IjY0OGIzNDJlYzNjODkxMDBjYWQ4ZGM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xrcQGy2ZuGrw3crATjA8svfxv_fCYC-U79xsPE_C8Mg';

export const getAllTrendingMovie = async () => {
  const response = await axios.get('trending/all/day?');
  console.log(response.data);
  return response.data;
};

export const getSearchMovie = async search => {
  const response = await axios.get(`search/movie?query=${search}`);
  console.log(response.data);
  return response.data;
};
