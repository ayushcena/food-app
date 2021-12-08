import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon
} from './CartElements';

const Cart =  (props) => {
  const { cartItems, onAdd, onRemove, isOpen, toggle } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
                <aside className="block col-1">
      <h5>Cart Items</h5>
      <div>
        {cartItems.length === 0 && <h6>Cart is empty</h6>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <b>${totalPrice.toFixed(2)}</b>
              </div>
            </div>
            <hr />
          </>
        )}
      </div>
      <div className="bottom">
              <button className="checkout" onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
    </aside>
            </Icon>
            {/* <div>Cart is Empty</div> */}
        </SidebarContainer>
        
  );
};

export default Cart;
