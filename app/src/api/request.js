import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
const requests = axios.create({
  //   baseURL: "/api",
  //代表请求超时的时间5s
  timeout: 5000,
});

//请求拦截器 在发送请求之前，请求拦截器可u检测到，可以在发送之前做一些逻辑
requests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  () => {
    return new Promise.reject(new Error("failed"));
  }
);

export default axios;
