import axios from 'axios'

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default instance;

// instance.get('/foo-bar');
// will actually be sending: http://api.themoviedb.org/3/foo-bar