import * as types from "../constants/OrderConstant"


const initialState = {
    orderList :[]
}

const calculateNextID =(state) =>{
    if (state.orderList.length===0)
        return 0;
    else {
        const maxID = state.orderList[state.orderList.length-1].id;
        return maxID+1;
    }
}

const orderReducer = (state= initialState,action) =>{
    switch (action.type){
        case types.ADD_TO_CART:
            return {
                orderList:[...state.orderList, {...action.order,id : calculateNextID(state)}]
            }

        case types.DELETE_ORDER:
            console.log(action.orderID);
            const newOrderList = [...state.orderList];
            const targetIndex = newOrderList.findIndex(order=> order.id===action.orderID);
            newOrderList.splice(targetIndex,1);
            return{
                orderList:newOrderList
            }

        default:
            return state;
    }
}


export default orderReducer