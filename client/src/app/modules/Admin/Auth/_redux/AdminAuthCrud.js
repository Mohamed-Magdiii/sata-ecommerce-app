import axios from "axios";

export const MAIN_AUTH = `${process.env.REACT_APP_API_URL}/api/auth`;
export const LOGIN_URL = `${MAIN_AUTH}/login`;
export const REGISTER_URL = `${MAIN_AUTH}/register`;
export const REQUEST_PASSWORD_URL = `${MAIN_AUTH}/forgot-password`;
export const ME_URL = `${process.env.REACT_APP_API_URL}/api/users/me`;
export const RESET_PASSWORD = `${MAIN_AUTH}/reset-password`
const HEADERS = {
  headers: { "x-auth-token": localStorage.getItem("authToken") },
};

export function login(email, password) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  });
}

export function register(fullname, email, password, telephone, mobile, role) {
  return axios.post(
    REGISTER_URL,
    { fullname, email, password, role, mobile, telephone },
    HEADERS
  );
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  return axios.get(ME_URL, HEADERS);
}

export const resetPassword = (id, token, password) => {
  return axios.post(`${RESET_PASSWORD}/${id}/${token}`,{password})
}

export const verifyResetPassword = (id, token) => {
  return axios.get(`${RESET_PASSWORD}/${id}/${token}`)
}
