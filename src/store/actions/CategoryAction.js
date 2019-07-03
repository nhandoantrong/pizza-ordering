import * as types from "../constants/CategoryContants";
import {getCategoriesAPI} from "../../services/CategoriesServices";
import {fireLoading, closeSwal} from "../../util/AlertFiring"


export const getCategoryFromServer = ()=>{
    fireLoading("Loading Menu");
    return dispatch =>{
        
        getCategoriesAPI().then(res=>{
            dispatch(getCategories(res.data));
            closeSwal();
            console.log(res.data);
            
        })
        .catch(err=>{
        })
    }
}

// redux-actions FSA
const getCategories= (categories) =>({
    type : types.GET_CATEGORIES,
    categories
})