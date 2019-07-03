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
        console.log(order);
        fireLoading("Processing Order")
        OrderAPI(order,token)
            .then(res=>{
                if (res.data._id){
                    fireSuccess("Ordered Sucessfully");
                    dispatch(checkout());
                }
                else throw res.data;
            })
            .catch(err => {
                console.log({...err})
                fireError("Something went wrong")
            })
    }
}


const checkout = () =>({
    type : types.CHECKOUT
})