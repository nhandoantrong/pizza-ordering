import Axios from "axios"
import {PRE_URL_API as commonURL} from "../util/urlConstants"

export const getToppingAPI = () =>{
    return Axios.get(commonURL+"toppings");
}