import * as types from "../constants/CategoryContants";
import {getCategoriesAPI} from "../../services/CategoriesServices";
import {fireLoading, closeSwal, fireError} from "../../util/AlertFiring"


export const getCategoryFromServer = ()=>{
    fireLoading("Loading Menu");
    return dispatch =>{
        
        getCategoriesAPI().then(res=>{
            dispatch(getCategories(res.data));
            closeSwal();
            
        })
        .catch(err=>{
            fireError("Something went wrong")
        })
    }
}

// redux-actions FSA
const getCategories= (categories) =>({
    type : types.GET_CATEGORIES,
    categories
})