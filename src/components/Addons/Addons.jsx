import "./addons.css";
import React from 'react';
import Sizes from "./Sizes";
import Info from "./Info";
import Info2 from "./Info2";
import Info3 from "./Info3";
import Toppings from "./Toppings";
import Otheradds from "./Otheradds";
import { useState } from "react";

const Addons = ({ pizza, toppings, others, setPopup }) => {
  const [toppingsArr, setToppings] = useState([]);
  const [addons, setAddons] = useState([]);
  const [sizePizza, setSizePizza] = useState({});
  console.log(toppingsArr,addons,sizePizza);
  const [total,setTotal] = React.useState(0);
  React.useEffect(()=>{
    let op = 0;
    let y = parseInt(sizePizza.price);
    for (let i = 0; i < toppingsArr.length; i++) {
      op += toppingsArr[i].price;
    }
    for(let i = 0; i < addons.length; i++) {
      op += addons[i].price;
    }
    let k = parseInt(op);
    setTotal(k+y);
  },[sizePizza,toppingsArr,addons]);
  // console.log(total);

  return (
    <div className="container">
      <span className="pizzatitle">{pizza.name} HELLO</span>
      <span className="close" onClick={() => setPopup((state) => !state)}>
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
        {Toppings.map((f) => {
          return (
            <Info2
              topping={f.topping}
              price={f.price}
              setToppings={setToppings}
            />
          );
        })}
      </div>
      <div className="otherAddsHead">Add Other Add-ons:</div>
      <div>
        {Otheradds.map((f) => {
          return (
            <Info3 drink={f.drink} price={f.price} setAddons={setAddons}/>
          );
        })}
      </div>
      <div className="footer">
        <span className="totalcost">Total Cost:</span>
        <span className="totalprice">{total}</span>
      </div>
    </div>
  );
};
export default Addons;
