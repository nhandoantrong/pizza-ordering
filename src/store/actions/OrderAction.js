import * as types from "../constants/OrderConstant";


export const addToCart = (order)=>({
    type: types.ADD_TO_CART,
    order
})