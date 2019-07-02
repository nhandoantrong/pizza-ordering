import * as types from "../constants/UserConstants";

const initialState = {
    token : "",
    user : {
        name: "",
        email: "",
        address: "",
        phone:"",
    },
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
        case types.CHANGE_DELIVERY_INFO:
            return{
                ...state,
                user:{
                    ...state.user,
                    address: action.address,
                    phone: action.phone
                }
            }

        default :
            return state;
    }
}

export default userReducer;