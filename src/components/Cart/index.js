import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon
} from './CartElements';
import './index.css';
import Example from './login';


const Cart =  (props) => {
  const { cartItems, onAdd, onRemove, isOpen, toggle, addOnPrice } = props;
  // const itemsPrice = addOnPrice ? addOnPrice : cartItems.reduce((a, c) => a + c.qty *c.price, 0)
  const itemsPrice= cartItems.reduce((a, c) => {
    if(addOnPrice){
      c.price= addOnPrice
    }
    return a + c.qty * c.price;
  }, 0) ;
  const totalPrice = itemsPrice;
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon >
            <span className="closeicon" onClick={toggle}>X</span>
                <aside className="block col-1">
      <div className="carthead">Cart Items</div>
      <div className="cartcontainer">
        {cartItems.length === 0 && <div className="emptycart">Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-4">
              <span onClick={() => onRemove(item)} className="remove">
                -
              </span>{' '}
              <span onClick={() => onAdd(item)} className="add">
                +
              </span>
            </div>
            <div className="col-3">
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
            
            
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr className="line"></hr>
            <div className="pricearea">
                <span className="totalprice">Total Price:</span>
              <span className="price">
              ₹{totalPrice.toFixed(2)}
              </span>
            </div>
            <hr className="line lowerline"></hr>
          </>
        )}
      </div>
      {cartItems.length !== 0 && (
              <Example/>  
        )}
      </aside>
      
    
            </Icon>
            {/* <div>Cart is Empty</div> */}
        </SidebarContainer>
        
  );
};

export default Cart;
