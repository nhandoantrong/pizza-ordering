import * as types from "../constants/InfoModalConstant"


const initialState = {
    isOpen: false,
    info: {}
}

const infoModal = (state = initialState, action) => {
    switch (action.type){
        case types.TOGGLE_MODAL:
            return {
                isOpen : action.isOpen,
                info: action.info ? action.info : {...state.info}
            }



        default:
            return state;
    }
}

export default infoModal