import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { HttpMethod } from '../constants';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_ORIGIN,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  },
});

// Request interceptor for API calls
instance.interceptors.request.use((config) => {
  return config;
});

// Response interceptor for API calls
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const apiClient = <T, D = AxiosError>(
  path: string,
  method: HttpMethod,
  data?: any,
  options?: AxiosRequestConfig
) => {
  const reqData =
    method === HttpMethod.GET ? { params: { ...data } } : { data };

  return new Promise<T>((resolve, reject) => {
    instance(path, {
      method,
      ...reqData,
      ...options,
    })
      .then((response: AxiosResponse<T, D>) => {
        const { data } = response;

        // @ts-ignore
        resolve(isEmpty(data?.data) ? data : data?.data);
      })
      .catch((error: AxiosError<T, D>) => {
        const { response } = error;

        reject(response?.data);
      });
  });
};

export const httpInstance = instance;

export { apiClient };
