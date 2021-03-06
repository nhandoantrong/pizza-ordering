import * as types from "../constants/OrderConstant";
import {OrderAPI} from "../../services/OrderServices"
import {fireLoading,fireError,fireSuccess} from "../../util/AlertFiring"
export const addToCart = (order)=>({
    type: types.ADD_TO_CART,
    order
})

export const deleteOrder = (orderID) =>({
    type: types.DELETE_ORDER,
    orderID
})


export const checkoutOnServer =(order, token) =>{
    return dispatch =>{        
        fireLoading("Processing Order")
        OrderAPI(order,token)
            .then(res=>{
                if (res.data._id){
                    fireSuccess("Your Order is getting processed");
                    dispatch(checkout());
                }
                else throw res.data;
            })
            .catch(err => {
                fireError("Something went wrong")
            })
    }
}


const checkout = () =>({
    type : types.CHECKOUT
})


// change quantity

export const changeQuantity = (id,amount) =>({
    type: types.CHANGE_QUANTITY,
    amount,
    id
})