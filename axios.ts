import axios, { type AxiosResponse, type AxiosRequestConfig } from 'axios';
const instance = axios.create({ timeout: 60000 });

// Request interceptors
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // do something
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    }
);

// Response interceptors
instance.interceptors.response.use(
    async (response: AxiosResponse) => {
        // do something
        return response;
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    }
);

export default instance;
