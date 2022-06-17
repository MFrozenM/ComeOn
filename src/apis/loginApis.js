import axios from "axios";

export const LoginApis = {
    Login: axios.defaults.baseURL + "/login",
    Logout: axios.defaults.baseURL + "/logout",
};

Object.freeze(LoginApis);
