import * as types from "../constants/UserConstants";

const initialState = {
    token: "",
    user: {
        name: "",
        email: "",
        address: "",
        phone: "",
    },
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER:
            return {
                ...state,
                token: action.token,
                user:{
                    ...state.user,
                    email: action.email,
                    name: action.name
                }
                
            }
        case types.LOGIN:
            return {
                ...state,
                token: action.token,
                user: {
                    ...state.user,
                    email: action.email,
                    name: action.name
                }
            }
        case types.CHANGE_DELIVERY_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    address: action.address,
                    phone: action.phone
                }
            }

        case types.CHANGE_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.name
                }
            }
        case types.LOGOUT:
            return {
                ...initialState
            }

        default:
            return state;
    }
}

export default userReducer;