import * as types from "../constants/BestSellerConstant"



const initialState = {
    bestSellerPizzas : []
}

export default (state = initialState, action) => {
    switch (action.type) {
    
    case types.GET_BEST_SELLER_MENU:
        return {
            bestSellerPizzas:action.bestSellerFromServer.map((bestSeller)=>{
                return bestSeller['Best seller'][0];
            })
        }
    
    default:
        return state
    }
}
