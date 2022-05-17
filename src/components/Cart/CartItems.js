import React from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  RemoveItemToCart,
  addItemToCartSpecified,
} from "../../store/cartSlice";
const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const increase = () => {
    console.log(cartItem);
    dispatch(addItemToCartSpecified(cartItem));
  };
  const decrease = () => {
    dispatch(RemoveItemToCart(cartItem));
  };
  return (
    <div className="row">
      <div className="col-2">{cartItem.name}</div>
      <div className="col-4">
        <span onClick={decrease} className="remove">
          -
        </span>
        <b className="quant">{cartItem.quantity}</b>
        <span onClick={increase} className="add">
          +
        </span>
      </div>
      <div className="col-3">
        <span className="currency">₹</span>
        {cartItem.totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default CartItems;
