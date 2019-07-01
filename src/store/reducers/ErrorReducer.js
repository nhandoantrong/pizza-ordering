import * as errorTypes from "../constants/ErrorConstant";

const initialState = {
    registerErr : {
        message: "",
        currentEmail: "",
    },
    loginErr :{
        message:"",
        currentEmail:"",
        currentPassword :""
    }
}


const errorRegister = (state = initialState, action ) =>{
    switch (action.type){
        case errorTypes.REGISTER_ERROR:
            return{
                ...state,
                registerErr: {
                    message: action.err,
                    currentEmail: action.email
                }
            }

        case errorTypes.LOGIN_ERROR :
            return {
            ...state,
            loginErr :{
                message: action.err,
                currentEmail:action.email,
                currentPassword: action.password
            }
        }
        
        default:
            return initialState
    }
}

export default errorRegister

