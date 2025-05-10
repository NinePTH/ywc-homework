import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const X_REFERENCE_ID_VALUE = import.meta.env.VITE_X_REFERENCE_ID_VALUE;

const api = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "x-reference-id": X_REFERENCE_ID_VALUE
    }
})

export default api