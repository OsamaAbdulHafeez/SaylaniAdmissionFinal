import axios from "axios";


const BASE_URL = "https://saylani-admission-final-backend.vercel.app/api"
export const publicRequest = axios.create({
    baseURL : BASE_URL,
    // header: {token:`Bearer`}
})