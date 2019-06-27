import {combineReducers} from "redux"
import infoModal from "./reducers/InfoModalReducer";
import categories from "./reducers/CategoriesReducer";

const rootReducer = combineReducers({
    infoModal,
    categories
})

export default rootReducer;