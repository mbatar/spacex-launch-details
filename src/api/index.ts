import axios, { Method, AxiosResponse } from "axios";
import qs from 'qs';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    transformRequest: [
        (data) => qs.stringify(data)
    ],
});

const request = <T>(method: Method, url: string, params: any): Promise<AxiosResponse<T>> => {
    return api.request<T>({
        method,
        url,
        params,
    })
};

export default request;