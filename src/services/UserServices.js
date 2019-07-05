import Axios from "axios"
import { PRE_URL_API as commonURL, headers } from "../util/urlConstants"

export const registerAPI = (user) => {
    return Axios.post(commonURL + "customers/register", { ...user });
}

export const loginAPI = (userLogin) => {
    return Axios.post(commonURL + "customers/login", { ...userLogin })
}

export const changeNameAPI = (name, token) => {
    return Axios.put(commonURL + "customers/updateName", { name }, { ...headers(token) })
}