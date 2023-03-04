import Axios from "axios";

const client = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

export const request = ({ ...options }) => {
  client.defaults.headers.common["x-auth-token"] = localStorage.getItem(
    "authToken"
  );
  client.defaults.headers.common["accept-language"] = localStorage.getItem(
    "i18nConfig"
  )
    ? JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] === "en"
      ? "en"
      : "ar"
    : "en";
  const onSuccess = (response) => response;
  const onError = (error) => error;
  return client(options)
    .then(onSuccess)
    .catch(onError);
};
