import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import Form from "react-bootstrap/Form";
import Button1 from "react-bootstrap/Button";

const Example=()=> {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div style={{ paddingTop: '2rem' }}>
      {showButton && (
        // <Button
        //   onClick={() => setShowMessage(true)}
        //   size="lg"
        // >
        //   Show Message
        // </Button>
        <div className="bottom">
        <button className="checkout" onClick={() => setShowMessage(true)}>
          Checkout
        </button>
      </div>
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
          <button variant="primary" onClick={() => setShowMessage(false)}>Back to Cart
          </button>
        </Alert>
      </CSSTransition>
      </div>
  );
}
export default Example;