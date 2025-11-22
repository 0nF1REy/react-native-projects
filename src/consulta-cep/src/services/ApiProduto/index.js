import axios from "axios";

const api = axios.create({
    baseURL: "https://680c0b5d2ea307e081d30b03.mockapi.io/api/v1/"
});

export default api;
