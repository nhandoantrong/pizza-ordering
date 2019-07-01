import * as types from "../constants/CategoryContants";
import {getCategoriesAPI} from "../../services/CategoriesServices";

export const getCategoryFromServer = ()=>{

    return dispatch =>{
        getCategoriesAPI().then(res=>{
            dispatch(getCategories(res.data));
            console.log(res.data);
            
        })
        .catch(console.log)
    }
}

// redux-actions FSA
const getCategories= (categories) =>({
    type : types.GET_CATEGORIES,
    categories
})