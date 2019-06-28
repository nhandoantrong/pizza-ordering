import Axios from "axios"
import {PRE_URL_API as commonURL} from "../util/urlConstants"
export const register = (user) =>{
    return Axios.post(commonURL+"categories",{...user});
}