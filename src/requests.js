const API_KEY = "dde4744ecbd9053534d71d2352faa9da";

const requests = {
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `/trending/all/day?api_key=${API_KEY}`,
  comedy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  action: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  drama: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fantasy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
  romantic: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};
export default requests;