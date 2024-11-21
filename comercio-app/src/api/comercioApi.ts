import axios from 'axios';
import { getEnvironments } from '../helpers/getEnviroments';

const { VITE_API_URL } = getEnvironments();

const comercioApi = axios.create({
  baseURL: VITE_API_URL,
});

// comercioApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (config.headers) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default comercioApi;
