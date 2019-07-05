import * as types from "../constants/CategoryContants";
const initialState = {
    categories: []
}

const getAllPizza = (categories) => {
    let pizzaList = [];
    for (let category of categories) {
        pizzaList = [...pizzaList, ...category.productID];
    }
    return {
        name: "ALL",
        _id: "1",
        productID: pizzaList
    }
};


const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORIES:
            getAllPizza(action.categories)
            return {
                categories: [getAllPizza(action.categories), ...action.categories,]
            }
        default:
            return state

    }
}

export default categoriesReducer;