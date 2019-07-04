import * as types from "../constants/UserConstants";
import * as errorTypes from "../constants/ErrorConstant";
import { registerAPI, loginAPI } from "../../services/UserServices";
import { validateUserRegister ,validateUserLogin } from "../../util/validateUser";
import {fireLoading,closeSwal} from "../../util/AlertFiring"


export const registerToServer = (userRegister) => {
    return dispatch => {
        if (validateUserRegister(userRegister)) {
            fireLoading("Checking On Server")
            registerAPI(userRegister)
                .then(res => {
                    closeSwal();
                    if (res.data.err){
                        throw res.data.err;
                    }
                    const token = res.data[0].token;
                    const email = res.data[1].email;
                    const name = res.data[2].name;
                    dispatch(login(token,email,name))

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



// login action
export const loginToServer = (userLogin) =>{
    return dispatch =>{
        if (validateUserLogin(userLogin)){
            fireLoading("Checking On Server");
            loginAPI(userLogin)
                .then(res =>{
                    closeSwal();
                    if (res.data.err){
                        throw res.data.err;
                    }
                    const token = res.data[0].token;
                    const email = res.data[1].email;
                    const name = res.data[2].name;
                    dispatch(login(token,email,name))
                })
                .catch(err=>{
                    dispatch(loginError(err,userLogin.email, userLogin.password))
                })
        }
    }
}

const login = (token,email,name) => 
{
    return{
        type: types.LOGIN,
        token,
        email,
        name
    }
    
}
const loginError = (err,email,password) =>({
    type : errorTypes.LOGIN_ERROR,
    err,
    email,
    password
})


export const changeDeliveryInfo = (address, phone) =>({
    type: types.CHANGE_DELIVERY_INFO,
    address,
    phone
})


// log out

export const logOut = ()=>({
    type: types.LOGOUT
})