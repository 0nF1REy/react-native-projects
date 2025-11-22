import axios from 'axios';

const api = axios.create({
  baseURL: 'https://680c2f752ea307e081d3680e.mockapi.io/api/v1/'
});

export default api;