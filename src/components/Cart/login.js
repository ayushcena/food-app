import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './index.css';

const Example=()=> {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
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
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          {/* <Button onClick={() => setShowMessage(false)}>
          </Button> */}
        </Alert>
      </CSSTransition>
      </div>
  );
}
export default Example;