import * as types from "../constants/UserConstants";

const initialState = {
    token : "",
    user : {},
}

const userReducer = (state=initialState, action) =>{
    switch (action.type){
        case types.REGISTER:
            return{
                ...state,
                token: action.token
            }
        case types.LOGIN:
            return {
                ...state,
                token: action.token
            }
        default :
            return state;
    }
}

export default userReducer;