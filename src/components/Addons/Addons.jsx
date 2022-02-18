import "./addons.css";
import React from "react";
import Sizes from "./Sizes";
import Info from "./Info";
import Info2 from "./Info2";
import Info3 from "./Info3";
import Toppings from "./Toppings";
import Otheradds from "./Otheradds";
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import {pizzaSize} from '../../store/cartSlice';
const Addons = ({ pizza, toppings, others, setPopup, setAddonPrice, addonPrice, onAdd }) => {
  let truthful = false;
  const [toppingsArr, setToppings] = useState([]);
  const [addons, setAddons] = useState([]);
  const [sizePizza, setSizePizza] = useState({});
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let op = 0;
    let y = 0;
    console.log(sizePizza);
    if(sizePizza.length > 0) {
      y = sizePizza.price;
    }
    console.log(y);
    for (let i = 0; i < toppingsArr.length; i++) {
      console.log(toppingsArr[i]);
      op += toppingsArr[i].price;
    }
    for (let i = 0; i < addons.length; i++) {
      console.log(addons[i]);
      op += addons[i].price;
    }
    let k = parseInt(op);
    console.log(op,y);
    setTotal(k + y);
  }, [sizePizza, toppingsArr, addons]);

  return (
    <div className="container">
      <span className="pizzatitle">{pizza.name}</span>
      <span className="close" onClick={() => setPopup(() => -1)}>
        X
      </span>
      <div>
        {Sizes.map((e) => {
          return (
            <Info productId={e.productId} size={e.size} quantity={e.quantity} name={e.name} price={e.price} setSizePizza={setSizePizza} />
          );
        })}
      </div>
      <div className="toppingsHead">Add Toppings:</div>
      <div>
        {Toppings.map((f, index) => {
          return (
            <Info2
              topping={f.topping}
              price={f.price}
              setToppings={setToppings}
              array={toppingsArr}
              productId={f.productId}
              index={index}
            />
          );
        })}
      </div>
      <div className="otherAddsHead">Add Other Add-ons:</div>
      <div>
        {Otheradds.map((f,index) => {
          return (
            <Info3 productId={f.productId} drink={f.drink} quantity={f.quantity} array={addons} index={index} price={f.price} setAddons={setAddons} />
          );
        })}
      </div>
      <div className="footer">
        <span className="totalcost">Total Cost:</span>
        <span className="totalprice">₹{total}</span>
        <button onClick={() => {
          dispatch(pizzaSize({toppingsArr,sizePizza,addons}));
        }}>add to cart</button>
      </div>

    </div>
  );
};
export default Addons;
