import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_APP_DEV_URL,
  withCredentials: true,
});