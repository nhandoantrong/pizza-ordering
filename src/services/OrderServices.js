import Axios from "axios";
import {PRE_URL_API as commonURL} from "../util/urlConstants"

export const OrderAPI = (order, token) =>{
    
    return Axios.post(commonURL+"orders",{...order},{
        headers:{
            "Authorization" : token
        }
    })
}