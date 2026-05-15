import axios from "axios";
import { load } from 'react-cookies';

export const endpoints = {
    "register": "/users",
    "login": "/auth/token",
    "google-login": "/oauth2/authorization/google"
}

export const authAPI = () => axios.create({
    baseURL: 'http://127.0.0.1:8080',
    headers: {
        "Authorization": `Bearer ${ load("access-token") }`
    }
})

export default axios.create({
    baseURL: 'http://127.0.0.1:8080',
})