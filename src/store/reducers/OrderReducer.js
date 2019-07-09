import * as types from "../constants/OrderConstant"
import { LOGOUT } from "../constants/UserConstants"

const initialState = {
    orderList: [],
    totalPrice: 0
}

const calculateNextID = (state) => {
    if (state.orderList.length === 0)
        return 0;
    else {
        const maxID = state.orderList[state.orderList.length - 1].id;
        return maxID + 1;
    }
}

const calculateTotalPrice = (orderList) => {
    return orderList.reduce((preValue, currentOrder) => {
        const calculateToppingPrice = currentOrder.toppingList.reduce((preVal, currentTopping) => {
            return preVal + currentTopping.price;
        }, 0)
        return preValue + (currentOrder.product.price + calculateToppingPrice) * currentOrder.quantity
    }, 0)
}

const checkExistence = (order, orderList) => {

    for (let index in orderList) {
        const item = orderList[index]
        if (order.product._id === item.product._id
            && order.toppingList.length === item.toppingList.length
            && order.product.size === item.product.size
            && order.product.type === item.product.type

        ) {
            let isTheSame = true;
            for (let topping of order.toppingList) {
                const toppingId = topping._id;
                if (item.toppingList.findIndex(toppingItem => toppingItem._id === toppingId) !== -1) {
                    isTheSame &= true;
                }
                else isTheSame &= false;
            }
            if (isTheSame)
                return index
        }
    }
    return -1

}


const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            const index = checkExistence(action.order, state.orderList);
            if (index === -1) {
                const newOrderList = [...state.orderList, { ...action.order, id: calculateNextID(state) }];
                const totalPrice = calculateTotalPrice(newOrderList)
                return {
                    orderList: newOrderList,
                    totalPrice
                }
            }
            else {
                const newOrderList = [...state.orderList]
                const target = { ...newOrderList[index] };
                target.quantity += action.order.quantity;
                newOrderList[index] = { ...target };
                const totalPrice = calculateTotalPrice(newOrderList)

                return {
                    orderList: newOrderList,
                    totalPrice
                }
            }
        }


        case types.DELETE_ORDER: {
            const newOrderList = [...state.orderList];
            const targetIndex = newOrderList.findIndex(order => order.id === action.orderID);
            newOrderList.splice(targetIndex, 1);
            const totalPrice = calculateTotalPrice(newOrderList)

            return {
                orderList: newOrderList,
                totalPrice
            }
        }

        case types.CHANGE_QUANTITY: {
            const newOrderList = [...state.orderList];
            const targetIndex = newOrderList.findIndex(order => order.id === action.id);
            const target = { ...newOrderList[targetIndex] };
            target.quantity = Math.max(target.quantity + action.amount, 1);
            newOrderList[targetIndex] = target;

            return {
                orderList: newOrderList,
                totalPrice: calculateTotalPrice(newOrderList)
            }
        }

        case LOGOUT: {
            return {
                ...initialState
            }
        }
        case types.CHECKOUT: {
            return {
                ...initialState
            }
        }

        default:
            return state;
    }
}


export default orderReducer