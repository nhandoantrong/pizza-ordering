import {combineReducers} from "redux"
import infoModal from "./reducers/InfoModalReducer";
import categories from "./reducers/CategoriesReducer";
import user from "./reducers/UserReducer";
import error from "./reducers/ErrorReducer"
import order from "./reducers/OrderReducer";
import toppings from "./reducers/ToppingReducer"
const rootReducer = combineReducers({
    infoModal,
    categories,
    user,
    error,
    order,
    toppings
})

export default rootReducer;