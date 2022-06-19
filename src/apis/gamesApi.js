import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001"

export const GamesApis = {
    Games: axios.defaults.baseURL + "/games",
    Categories: axios.defaults.baseURL + "/categories",
};

Object.freeze(GamesApis);
