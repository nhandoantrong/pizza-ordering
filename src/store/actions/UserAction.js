import * as types from "../constants/UserConstants";
import * as errorTypes from "../constants/ErrorConstant";
import { registerAPI, loginAPI } from "../../services/UserServices";
import { validateUserRegister ,validateUserLogin } from "../../util/validateUser";



export const registerToServer = (userRegister) => {
    return dispatch => {
        if (validateUserRegister(userRegister)) {
            registerAPI(userRegister)
                .then(res => {
                    const token = res.data.token;
                    if (!token){
                        throw res.data.err;
                    }
                    dispatch(register(token));

                })
                .catch(err=>{
                    dispatch(registerError(err,userRegister.email))
                })
        }
        else dispatch(register(""));
    }
}
const register = (token) => ({
    type: types.REGISTER,
    token
})
const registerError = (err,email) =>({
    type : errorTypes.REGISTER_ERROR,
    err,
    email
})


export const loginToServer = (userLogin) =>{
    return dispatch =>{
        if (validateUserLogin(userLogin)){
            loginAPI(userLogin)
                .then(res =>{
                    const token = res.data.token;
                    if (!token){
                        throw res.data.err;
                    }
                    dispatch(login(token))
                })
                .catch(err=>{
                    dispatch(loginError(err,userLogin.email, userLogin.password))
                })
        }
    }
}

const login = (token) => ({
    type: types.LOGIN,
    token
})
const loginError = (err,email,password) =>({
    type : errorTypes.LOGIN_ERROR,
    err,
    email,
    password
})
