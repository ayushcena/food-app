import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button1 from "react-bootstrap/Button";
import axios from "axios";

const Example = ({ totalPrice }) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  async function placeOrder() {
    try {
      await axios
        .get("https://api.eatx.in/api/food_order")
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
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
            <div class="mobno">Mobile Number:</div>
            <input
              type="tel"
              class="mobbox"
              name="contactno"
              pattern="[0-9]{10}"
              required
            ></input>
            <button
              type="submit"
              className="placeorder"
              id="submitForm"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </form>
        </Alert>
      </CSSTransition>
    </div>
  );
};
export default Example;
