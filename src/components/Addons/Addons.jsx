import "./addons.css";
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
            <Info3 drink={f.drink} price={f.price} setAddons={setAddons} />
          );
        })}
      </div>
      <div className="footer">
        <span className="totalcost">Total Cost:</span>
        <span className="totalprice">Price</span>
      </div>
    </div>
  );
};
export default Addons;
