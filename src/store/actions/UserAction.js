import * as types from "../constants/UserConstants";
import * as errorTypes from "../constants/ErrorConstant";
import { registerAPI, loginAPI, changeNameAPI } from "../../services/UserServices";
import { validateUserRegister ,validateUserLogin } from "../../util/validateUser";
import {fireLoading, fireSuccess, fireError,closeSwal} from "../../util/AlertFiring"


export const registerToServer = (userRegister) => {
    return dispatch => {
        if (validateUserRegister(userRegister)) {
            fireLoading("Checking On Server")
            registerAPI(userRegister)
                .then(res => {
                    if (res.data.err){
                        throw res.data.err;
                    }
                    const token = res.data[0].token;
                    const email = res.data[2].email;
                    const name = res.data[1].name;
                    dispatch(register(token,email,name))
                    fireSuccess("Registered Successfully");


                })
                .catch(err=>{
                    closeSwal();
                    dispatch(registerError(err,userRegister.email))
                })
        }
        else dispatch(register(""));
    }
}
const register = (token,email,name) => ({
    type: types.REGISTER,
    token,
    email,
    name
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

                    if (res.data.err){
                        throw res.data.err;
                    }
                    const token = res.data[0].token;
                    const email = res.data[1].email;
                    const name = res.data[2].name;
                    dispatch(login(token,email,name))
                    fireSuccess("Logged In Successfully");

                })
                .catch(err=>{
                    closeSwal();
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


// change name and password

export const changeNameOnServer = (name, token)=>{
    return dispatch => {
        fireLoading("Changing Name in server")
        changeNameAPI(name,token)
            .then(res=>{
                dispatch(changeName(res.data.name))
                fireSuccess("Name changed")
            })
            .catch (err=>{
                fireError("Something went wrong")
            })
    }
}


const changeName = (name) =>({
    type: types.CHANGE_NAME,
    name
})