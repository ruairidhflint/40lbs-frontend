import axios from 'axios';

export const axiosWithBase = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    authorization: localStorage.getItem('authorization')
      ? localStorage.getItem('authorization')
      : null,
  },
});
