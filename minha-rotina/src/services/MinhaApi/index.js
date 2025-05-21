import axios from "axios";

const api = axios.create({
    baseURL: "https://682e5082746f8ca4a47c9268.mockapi.io/api/v1/"
});

export default api;
