import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

request.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = localStorage.getItem("authToken");
  config.headers["accept-language"] = localStorage.getItem("i18nConfig")
    ? JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] === "en"
      ? "en"
      : "ar"
    : "en";
  return config;
});

export default request;
