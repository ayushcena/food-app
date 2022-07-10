import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  RemoveItemToCart,
  addItemToCartSpecified,
} from "../../store/cartSlice";
const CartItems = ({ cartItem, givenitemcolors }) => {
  const dispatch = useDispatch();
  const increase = () => {
    console.log(cartItem);
    dispatch(addItemToCartSpecified(cartItem));
  };
  const decrease = () => {
    console.log(cartItem);
    dispatch(RemoveItemToCart(cartItem));
  };
  return (
    <div className="row">
      <div className="col-2" style={{color: givenitemcolors.background}}>{cartItem.name}</div>
      <div className="col-4">
        <span style={{color: givenitemcolors.background, backgroundColor: givenitemcolors.primary}} onClick={decrease} className="remove">
          -
        </span>
        <b style={{color: givenitemcolors.background}} className="quante">{cartItem.quantity}</b>
        <span style={{color: givenitemcolors.background, backgroundColor: givenitemcolors.tertiary}} onClick={increase} className="add">
          +
        </span>
      </div>
      <div style={{color: givenitemcolors.background}} className="col-3">
        <span style={{color: givenitemcolors.background}} className="currency">₹</span>
        {cartItem.totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default CartItems;
