import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import {getCartItems} from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import "./index.css";
import Form from "react-bootstrap/Form";
import Button1 from "react-bootstrap/Button";
import axios from "axios";
import placedimg from "../../images/orderplaced.gif";
import { useHistory } from "react-router-dom";

const Example = ({ totalPrice, logincolors, tableNo }) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [phone, setPhone] = useState("");

  const handleOnChange = (value) => {
    setPhone(value);
  };
  const history = useHistory();
  function show() {
    document.getElementById("myImage").style.display = "block";
  }
  const cartItem = useSelector(getCartItems);
  // console.log(cartItem);
  const newCart = [];
  for (let i = 0; i < cartItem.length; i++) {
    newCart.push({id:cartItem[i].productId,item_data:{name:cartItem[i].name},cost:cartItem[i].price,cart_quantity:cartItem[i].quantity});
  }
  let eatxCart = {

  }
  async function placeOrder() {
    console.log(tableNo);
    try {
      await axios.post("https://api.eatx.in/api/user/precheckout/",{
        eatxCart:{
          items:newCart,
          table:tableNo,
          customer:{
            name:"XYZ",
            phone:"1234567890"
          },
          meta:{
      
          }
        }
      },{
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Token 7a5a458544d9b210bdcf6372c6804ad01263f57e"
        }
      }).then((data)=>{
        history.push("/loading");
        window.alert("Order Placed");
      }).catch((err)=>{
        window.alert(err);
      });
    } catch (error) {
      window.alert(error);
    }
    // tableNo yaha pe post req me daal dena
  }

  let price;
  React.useEffect(() => {
    price = localStorage.getItem("price");
  });
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div style={{ paddingTop: "2rem" }}>
      {showButton && (
        // <Button
        //   onClick={() => setShowMessage(true)}
        //   size="lg"
        // >
        //   Show Message
        // </Button>
        <>
          {totalPrice ? (
            <>
              <div className="bottom">
                <button
                  style={{
                    color: logincolors.secondary,
                    backgroundColor: logincolors.primary,
                  }}
                  className="checkout"
                  onClick={() => setShowMessage(true)}
                >
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          // variant="primary"
          // dismissible
          onClose={() => setShowMessage(false)}
        >
          <button
            style={{
              color: logincolors.secondary,
              backgroundColor: logincolors.primary,
            }}
            className="backtocart"
            onClick={() => setShowMessage(false)}
          >
            Back to Cart
          </button>
          <form>
            <label class="input">
              <input
                class="input__field"
                type="tel"
                placeholder=" "
                pattern="[0-9]{10}"
              />
              <span class="input__label">Mobile Number</span>
            </label>
            {/* <div id = "myDiv">
            <img id = "myImage" src = {placedimg} ></img></div> */}
            <button
              style={{
                color: logincolors.secondary,
                backgroundColor: logincolors.primary,
              }}
              // type="submit"
              className="placeorder"
              id="submitForm"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </form>
          {/* <button onClick={show}>show</button> */}
        </Alert>
      </CSSTransition>
    </div>
  );
};
export default Example;
