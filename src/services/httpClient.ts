import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/constants';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  config.headers.Accept = 'application/json;version=v1_web';

  return config;
});
