


export const reduceOrder = (orderList) =>{
    const reducedList = orderList.map(order=>{
        return{
            productID : order.product._id,
            size: order.product.size,
            type: order.product.type,
            quantity: order.quantity,
            topping: order.toppingList.map(topping => topping._id)
        }
    })
    return reducedList;
}