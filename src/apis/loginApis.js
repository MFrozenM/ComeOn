import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001"

export const LoginApis = {
    Login: axios.defaults.baseURL + "/login",
    Logout: axios.defaults.baseURL + "/logout",
};

Object.freeze(LoginApis);
