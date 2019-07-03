import * as types from "../constants/OrderConstant"
import {LOGOUT} from "../constants/UserConstants"

const initialState = {
    orderList :[],
    totalPrice:0
}

const calculateNextID =(state) =>{
    if (state.orderList.length===0)
        return 0;
    else {
        const maxID = state.orderList[state.orderList.length-1].id;
        return maxID+1;
    }
}

const calculateTotalPrice = (orderList) =>{
    return  orderList.reduce((preValue, currentOrder) => {
        const calculateToppingPrice = currentOrder.toppingList.reduce((preVal, currentTopping) => {
            return preVal + currentTopping.price;
        }, 0)
        return preValue + (currentOrder.product.price + calculateToppingPrice) * currentOrder.quantity
    }, 0)
} 

const orderReducer = (state= initialState,action) =>{
    switch (action.type){
        case types.ADD_TO_CART:{
            const newOrderList =[...state.orderList, {...action.order,id : calculateNextID(state)}];
            const totalPrice = calculateTotalPrice(newOrderList)
            return {
                orderList: newOrderList,
                totalPrice 
            }
        }
            

        case types.DELETE_ORDER:{
            console.log(action.orderID);
            const newOrderList = [...state.orderList];
            const targetIndex = newOrderList.findIndex(order=> order.id===action.orderID);
            newOrderList.splice(targetIndex,1);
            const totalPrice = calculateTotalPrice(newOrderList)

            return{
                orderList:newOrderList,
                totalPrice
            }
        }
        
        case LOGOUT:{
            return{
                ...initialState
            }
        }

        default:
            return state;
    }
}


export default orderReducer