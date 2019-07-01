import * as types from "../constants/toppingConstants";
import {getToppingAPI} from "../../services/ToppingService"

export const getToppingFromServer = ()=>{
    return dispatch =>{
        getToppingAPI().then(res=>{
            dispatch(getTopping(res.data))
        }).catch(console.log)
    }
}

const getTopping = (toppings) =>({
    type : types.GET_TOPPING,
    toppings
})