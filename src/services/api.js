import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['x-api-key'] = 'ec2bc98b0f4c519c2c8f31b5a1a44ddd';

export const getAllTrendingMovie = async () => {
  const response = await axios.get('trending/all/');
  console.log(response.data);
  return response.data;
};
