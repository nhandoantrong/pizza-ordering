import * as types from "../constants/toppingConstants";
import {getToppingAPI} from "../../services/ToppingService"
import {fireError} from "../../util/AlertFiring"
export const getToppingFromServer = ()=>{
    return dispatch =>{
        getToppingAPI().then(res=>{
            dispatch(getTopping(res.data))
        }).catch(err=>{
            fireError("Cannot get Topping from server")
        })
    }
}

const getTopping = (toppings) =>({
    type : types.GET_TOPPING,
    toppings
})