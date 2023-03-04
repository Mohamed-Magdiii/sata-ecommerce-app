export const HEADERS = {
  headers: {
    "x-auth-token": localStorage.getItem("authToken"),
  },
};

const detectLanguage =
  localStorage.getItem("i18nConfig") &&
  JSON.parse(localStorage.getItem("i18nConfig"))["selectedLang"] === "ar"
    ? true
    : false;

export default detectLanguage;
