import Axios from "axios"
import {PRE_URL_API as commonURL} from "../util/urlConstants"
export const registerAPI = (user) =>{
    return Axios.post(commonURL+"customers/register",{...user});
}

export const loginAPI = (userLogin) =>{
    return Axios.post(commonURL+"customers/login",{...userLogin})
}