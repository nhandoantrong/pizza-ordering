import {combineReducers} from "redux"
import infoModal from "./reducers/InfoModalReducer";
import categories from "./reducers/CategoriesReducer";
import user from "./reducers/UserReducer";
import error from "./reducers/ErrorReducer"
const rootReducer = combineReducers({
    infoModal,
    categories,
    user,
    error
})

export default rootReducer;