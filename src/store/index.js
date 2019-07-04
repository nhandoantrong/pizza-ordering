import {combineReducers} from "redux"
import infoModal from "./reducers/InfoModalReducer";
import categories from "./reducers/CategoriesReducer";
import user from "./reducers/UserReducer";
import error from "./reducers/ErrorReducer"
import order from "./reducers/OrderReducer";
import toppings from "./reducers/ToppingReducer";
import bestSeller from "./reducers/BestSellerReducer"
const rootReducer = combineReducers({
    infoModal,
    categories,
    user,
    error,
    order,
    toppings,
    bestSeller
})

export default rootReducer;