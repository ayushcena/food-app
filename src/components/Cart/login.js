import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button1 from "react-bootstrap/Button";
import axios from "axios";
import placedimg from '../../images/orderplaced.gif'
import { useHistory } from "react-router-dom";

const Example = ({ totalPrice }) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();
  function show() {
    document.getElementById("myImage").style.display = "block";
    // setTimeout(document.getElementById("myDiv").style.display="none",6000);
  }

  // function hide() {
  //   document.getElementById("myDiv").style.display="none";
  // }

  async function placeOrder() {
    history.push('/loading');
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
          <button className="backtocart" onClick={() => setShowMessage(false)}>
            Back to Cart
          </button>
          <form>
            <div class="mobno">Mobile Number</div>
            <input
              type="tel"
              class="mobbox"
              name="contactno"
              pattern="[0-9]{10}"
              required
            ></input>
            {/* <div id = "myDiv">
            <img id = "myImage" src = {placedimg} ></img></div> */}
            <button
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
