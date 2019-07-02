import Axios from "axios"
import {PRE_URL_API as commonURL, BEST_SELLER_ID} from "../util/urlConstants"
export const getCategoriesAPI = () =>{
    return Axios.get(commonURL+"categories");
}

export const getBestSellerAPI = () =>{
    return Axios.get(commonURL+"categories/" + BEST_SELLER_ID)
}