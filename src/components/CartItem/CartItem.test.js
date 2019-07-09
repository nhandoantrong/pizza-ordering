import {CartItem} from "./CartItem"
import { render } from 'enzyme';
import React from "react"

const props ={
    product:{},
    toppingList: [],
    quantity : 3,
    orderId: "123",
    deleteOrder : () =>{},
    isCanBeModify: true,
    changeQuantity: () =>{}

}

test('renders Cart Item without crashing', () => {
    
    const cartItem = render(<CartItem {...props}/>);
    console.log(cartItem)
    expect(cartItem).toMatchSnapshot();
});
