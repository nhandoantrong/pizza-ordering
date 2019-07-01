/* eslint-disable eqeqeq */


export const validateUserRegister = (userRegister) => {
    return !!userRegister.name 
        && !!userRegister.email 
        && !!userRegister.password 
        && !!userRegister.rePassword 

}

export const validateUserLogin =(userLogin) =>{
    return !!userLogin.email 
        && !!userLogin.password 
}