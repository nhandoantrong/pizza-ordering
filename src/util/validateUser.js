import {emailRegex, numberRegex} from "./regex"

const MIN_LENGTH_PASSWORD = 8;


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

export const validateName = (name) =>{
    return !name ? "Your name is required" :null   
}

export const validatePassword = (password) =>{
    if (!password)
        return "Password is required"
    if (password.length < MIN_LENGTH_PASSWORD)
        return "Password must contain 8 or more characters"
}

export const validatePasswordConfirm = (password, passwordConfirm) =>{
    if (password !== passwordConfirm){
        return "Passwords are not matched"
    }
}

export const validateEmail = (email) =>{
    if (!email)
        return "Email is required"
    if (!emailRegex.test(email))
        return "Email must be valid"
}

export const validatePhone = (phone) =>{
    if (!phone)
        return "Phone number is required"
    if (!numberRegex.test(phone))
        return "Phone number only contains numbers"
    if (phone.length !==10)
        return "Phone must contain 10 digits"
}