import * as types from "../constants/CategoryContants";
const initialState= {
    categories: []
}

const categoriesReducer = (state= initialState, action)=>{
    switch(action.type){
        case types.GET_CATEGORIES:
            return{
                categories: action.categories
            }
        default:
            return state
            
    }
}

export default categoriesReducer;