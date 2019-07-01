import * as types from "../constants/OrderConstant"


const initialState = {
    orderList :[]
}

const orderReducer = (state= initialState,action) =>{
    switch (action.type){
        case types.ADD_TO_CART:
            return {
                orderList:[...state.orderList, action.order]
            }


        default:
            return state;
    }
}


export default orderReducer