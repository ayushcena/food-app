import "./addons.css";
import React from "react";
import Info from "./Info";
import Info2 from "./Info2";
import Info3 from "./Info3";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { pizzaSize, topping } from '../../store/cartSlice';
const Addons = ({ pizza, toppings, others, setPopup, setAddonPrice, addonPrice, onAdd }) => {
  const [toppingsArr, setToppings] = useState([]);
  const [addons, setAddons] = useState([]);
  const [sizePizza, setSizePizza] = useState({});
  let nameee = pizza.item_data.name;
  let sizzzes = pizza.variants;
  let topppings;
  if (pizza.extras !== null) {
    topppings = pizza.extras[0].items;
  }
  let addonsss = pizza.extras;
  if (pizza.extras === null || pizza.extras === undefined) {
    addonsss = [];
  }
  if (pizza.extras !== null) {
    addonsss = pizza.extras[1].items;
  }
  let boolVal1 = true;
  if (pizza.variants === null || pizza.variants === undefined) {
    boolVal1 = false;
    topppings = pizza;
    sizzzes = [];
  }
  if (pizza.extras === null || pizza.extras === undefined) {
    topppings = [];
  }
  let boolVal = true;
  if (topppings === undefined || topppings === null) {
    boolVal = false;
  }
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let op = 0;
    let y = 0;
    // console.log(toppingsArr);
    // console.log(toppingsArr);
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

  return (
    <div className="container">
      <br></br><br></br>
      <span className="pizzatitle">{nameee}</span>
      <span className="close" onClick={() => setPopup(() => -1)}>
        X
      </span>
      <div>
        {sizzzes.map((e) => {
          // console.log(sizzzes);
          return (
            <Info size={e.label} productId={e.id} quantity={1} name={nameee} price={e.cost} setSizePizza={setSizePizza} />
          );
        })}
      </div>
      <div className="toppingsHead">Add Toppings:</div>
      <div>
        {boolVal1 ? (<>
          {topppings.map((f, index) => {
            // console.log(f);
            return (
              <Info2
              productId={f.id}
                topping={f.name}
                price={f.cost}
                index={index}
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
          {addonsss.map((f, index) => {
            return (
              <Info3 productId={f.id} drink={f.name} quantity={1} array={addons} index={index} price={f.cost} setAddons={setAddons} />
            );
          })}
        </>) : (<></>)}
      </div>
      <div className="footer">
        <span className="totalcost">Total Cost:</span>
        <span className="totalprice">₹{total}</span>
        <div onClick={() => {
          dispatch(pizzaSize({ toppingsArr, sizePizza, addons }));
        }} className="addcart">Add to Cart</div>
      </div>

    </div>
  );
};
export default Addons;
