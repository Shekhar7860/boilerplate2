import axios from 'axios';
// import envs from '../config/env';
import {LOGOUT} from '../constants/routeNames';
// import {navigate} from '../navigations/SideMenu/RootNavigator';

let headers = {};

const axiosInstance = axios.create({
  baseURL: "http://localhost:3039",
  headers,
});

axiosInstance.interceptors.request.use(
  async (config : any) => {
    let token = "teststststststtstss"
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error : any) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response : any) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error : any) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      // navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
