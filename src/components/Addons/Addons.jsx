import "./addons.css";
import React from "react";
import Sizes from "./Sizes";
import Info from "./Info";
import Info2 from "./Info2";
import Info3 from "./Info3";
import Toppings from "./Toppings";
import axios from "axios";
import Otheradds from "./Otheradds";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { pizzaSize, topping } from '../../store/cartSlice';
const Addons = ({ pizza, toppings, others, setPopup, setAddonPrice, addonPrice, onAdd }) => {
  const [toppingsArr, setToppings] = useState([]);
  const [addons, setAddons] = useState([]);
  const [sizePizza, setSizePizza] = useState({});
  let sizzzes = pizza.variants;
  let topppings;
  if(pizza.extras !== null) {
    topppings = pizza.extras[0].items;
  }
  let boolVal1 = true;
  if(pizza.variants === null || pizza.variants === undefined) {
    boolVal1 = false;
    topppings = pizza;
    sizzzes = [];
  }
  if(pizza.extras === null || pizza.extras === undefined) {
    topppings = [];
  }
  console.log(pizza);
  let boolVal = true;
  if (topppings === undefined || topppings === null) {
    boolVal = false;
  }
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let op = 0;
    let y = 0;
    if (sizePizza.quantity) {
      y = sizePizza.price;
    }
    for (let i = 0; i < toppingsArr.length; i++) {
      op += toppingsArr[i].price;
    }
    for (let i = 0; i < addons.length; i++) {
      op += addons[i].price;
    }
    let k = parseInt(op);
    setTotal(k + y);
  }, [sizePizza, toppingsArr, addons]);
  const [res, setRes] = React.useState([]);
  React.useEffect(() => {
    async function getOrderDetails() {
      try {
        await axios
          .get("https://api.eatx.in/api/v3/item/items/130/?key=tcd")
          .then((response) => {
            // console.log(response.data);
            setRes(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
    getOrderDetails();
  }, []);
  const [finalData, setFinalData] = React.useState([]);
  const DistingifushData = async () => {
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      if (element.category === 'PIZZA') {
        setFinalData(finalData.push(res[i + 1].items));
      }
    }
  }
  DistingifushData();
  // console.log(finalData);
  return (
    <div className="container">
      <br></br><br></br>
      <span className="pizzatitle">{pizza.name}</span>
      <span className="close" onClick={() => setPopup(() => -1)}>
        X
      </span>
      <div>
        {sizzzes.map((e) => {
          return (
            <Info size={e.label} quantity={e.quantity} name={e.name} price={e.cost} setSizePizza={setSizePizza} />
          );
        })}
      </div>
      <div className="toppingsHead">Add Toppings:</div>
      <div>
        {boolVal1 ? (<>
          {topppings.map((f, index) => {
            return (
              <Info2
                topping={f.name}
                price={f.cost}
                setToppings={setToppings}
                array={toppingsArr}
              />
            );
          })}
        </>) : (<></>)}
      </div>
      <div className="otherAddsHead">Add Other Add-ons:</div>
      <div>
        {boolVal ? (<>
          {Otheradds.map((f, index) => {
            return (
              <Info3 productId={f.productId} drink={f.drink} quantity={f.quantity} array={addons} index={index} price={f.price} setAddons={setAddons} />
            );
          })}
        </>) : (<></>)}
      </div>
      <div className="footer">
        <span className="totalcost">Total Cost:</span>
        <span className="totalprice">₹{total}</span>
        <button onClick={() => {
          dispatch(pizzaSize({ toppingsArr, sizePizza, addons }));
        }}>add to cart</button>
      </div>

    </div>
  );
};
export default Addons;
