import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });
const authInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: { Authorization: token },
  withCredentials: true,
});

export { instance, authInstance };
