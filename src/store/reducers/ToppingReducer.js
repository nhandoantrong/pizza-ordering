import * as types from "../constants/toppingConstants"


const initialState = {
    toppings:[]
}

const toppingReducer = (state = initialState,action) =>{
    switch (action.type){
        case types.GET_TOPPING:
            return{
                toppings:action.toppings
            }

        default:
            return state
    }
}

export default toppingReducer