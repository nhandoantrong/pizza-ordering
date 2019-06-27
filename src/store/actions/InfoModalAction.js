import * as types from "../constants/InfoModalConstant";


export const toggleModal = (isOpen, info) =>({
    type: types.TOGGLE_MODAL,
    isOpen,
    info
})