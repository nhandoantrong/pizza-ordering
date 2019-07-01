import {validateUserRegister} from "./validateUser";


describe("test validate user", ()=>{
    test("empty user",()=>{
        expect(validateUserRegister({})).toBe(false);
    })


    test("user width an empty string attribute",()=>{
        expect(validateUserRegister({
            name : "Nhan",
            email: "nhandoantrong@gmail.com",
            password: "123456789",
            rePassword: ""
        })).toBe(false);
        expect(validateUserRegister({
            name : "Nhan",
            email: "nhandoantrong@gmail.com",
            password: "",
            rePassword: "123"
        })).toBe(false);
        expect(validateUserRegister({
            name : "Nhan",
            email: "",
            password: "123456789",
            rePassword: "123"
        })).toBe(false);
        expect(validateUserRegister({
            name : "",
            email: "nhandoantrong@gmail.com",
            password: "123456789",
            rePassword: "123"
        })).toBe(false);
    })


})