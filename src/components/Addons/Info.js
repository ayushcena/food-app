import React from "react";
import "./addons.css";
import {useDispatch} from 'react-redux';
import {RemoveItemToCart,addItemToCartSpecified,pizzaSize,topping,addons} from '../../store/cartSlice';

function Info(props) {
  // console.log(props);
  const dispatch = useDispatch();
  return (
    <div className="sizecontainer">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-4">
          <label>
            <input type="radio" name="product" className="card-input-element"/>
 
            <div
              className="panel panel-default card-input"
              onClick={() => {
                props.setSizePizza({
                  size:props.size,productId:props.productId,price:props.price,name:props.name,quantity:props.quantity
                })
              }}
            >
              <span className="panel-body">{props.size}</span>
              <span className="sizeprice">₹ {props.price}</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
export default Info;
