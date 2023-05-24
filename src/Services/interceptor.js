import axios from "axios";
import store from "../Store/Store";

const BaseUrl = "https://devapi.likeplaylikeplay.com/"; // process.env.REACT_APP_BASEURL;

const Api = axios.create({
  timeout: 1000000,
  baseURL: BaseUrl,
});

Api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
Api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

Api.interceptors.request.use(
  (config) => {
    if (store?.getState()?.LoginSlice?.data?.token) {
      const token = `Bearer ${store?.getState()?.LoginSlice?.data?.token}`;
      config.headers = {
        Authorization: token,
      };
    }
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

// Add a response interceptor
Api.interceptors.response.use(
  (response) => {
      return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
