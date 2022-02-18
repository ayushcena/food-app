import React from 'react'
import './index.css'
import {useDispatch} from 'react-redux';
import {RemoveItemToCart,addItemToCartSpecified} from '../../store/cartSlice';
const CartItems = ({cartItem}) => {
    const dispatch = useDispatch();
    const increase = () => {
        dispatch(addItemToCartSpecified(cartItem));
        console.log("+++");
    }
    const decrease = () => {
        dispatch(RemoveItemToCart(cartItem));
        console.log("---");
    }
    return (
        <div className="brder">
            <div>
                <b>Name: {cartItem.name}</b><br />
                <b>Quantity: <button onClick={increase}>+</button>{cartItem.quantity}<button onClick={decrease}>-</button></b><br />
                <b>Price: {cartItem.totalPrice}</b><br />
            </div>
        </div>
    )
}

export default CartItems