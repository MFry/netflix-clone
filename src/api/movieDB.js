import axios from 'axios';

const discoverMovies = (pages = 1, year = 2017) =>
  axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=87dfa1c669eea853da609d4968d294be&include_video=true&page=1&year=2017&sort_by=popularity.desc',
  );

export { discoverMovies };
