import axios from "axios";

const requestConfig = {
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(requestConfig);

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      window.location.replace("/login");
    }

    return Promise.reject(error.response.data || error);
  }
);

export default axiosInstance;
