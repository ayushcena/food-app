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

const Addons = ({ pizza, toppings, others, setPopup, setAddonPrice, addonPrice, onAdd }) => {
  let truthful = false;
  const [toppingsArr, setToppings] = useState([]);
  const [addons, setAddons] = useState([]);
  const [sizePizza, setSizePizza] = useState({});
  console.log(toppingsArr, addons, sizePizza);
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let op = 0;
    let y = parseInt(sizePizza.price);
    for (let i = 0; i < toppingsArr.length; i++) {
      op += toppingsArr[i].price;
    }
    for (let i = 0; i < addons.length; i++) {
      op += addons[i].price;
    }
    let k = parseInt(op);
    setTotal(k + y);
  }, [sizePizza, toppingsArr, addons]);
  console.log(total);
  useEffect(() => console.log(toppingsArr), [toppingsArr]);

  return (
    <div className="container">
      <span className="pizzatitle">{pizza.name}</span>
      <span className="close" onClick={() => setPopup(() => -1)}>
        X
      </span>
      <div>
        {Sizes.map((e) => {
          return (
            <Info size={e.size} price={e.price} setSizePizza={setSizePizza} />
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
              index={index}
            />
          );
        })}
      </div>
      <div className="otherAddsHead">Add Other Add-ons:</div>
      <div>
        {Otheradds.map((f,index) => {
          return (
            <Info3 drink={f.drink} array={addons} index={index} price={f.price} setAddons={setAddons} />
          );
        })}
      </div>
      <div className="footer">
        <span className="totalcost">Total Cost:</span>
        <span className="totalprice">₹{total}</span>
        <button onClick={() => {
          setAddonPrice(total);
          onAdd(pizza)
        }}>add to cart</button>
      </div>

    </div>
  );
};
export default Addons;
