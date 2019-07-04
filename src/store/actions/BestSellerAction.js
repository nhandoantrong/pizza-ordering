import * as types from "../constants/BestSellerConstant";
import { getBestSellerAPI } from "../../services/CategoriesServices"


export const getBestSellerFromServer = () =>{
    return dispatch => {
        getBestSellerAPI().then(res=>{
             dispatch(getBestSeller(res.data))
        }).catch();
    }
}


const getBestSeller = (bestSellerFromServer) => ({
    type : types.GET_BEST_SELLER_MENU,
    bestSellerFromServer
})