import React from 'react';
import { useSelector } from 'react-redux';
import {
  SidebarContainer,
  Icon,
  CloseIcon
} from './CartElements';
import './index.css';
import Example from './login';
import {getCartItems} from '../../store/cartSlice';
import GivenItems from './CartItems';
import axios from 'axios';
import {COLORS} from '../colors.js'

const Cart = (props) => {
<<<<<<< HEAD
  const { cartItems, onAdd, onRemove, isOpen, toggle, addOnPrice, cartcolors } = props;
=======
  const { cartItems, onAdd, onRemove, isOpen, toggle, addOnPrice,tableNo } = props;
>>>>>>> 866143acbc4453ed8ab420f56516bf149e61fe46
  // const itemsPrice = addOnPrice ? addOnPrice : cartItems.reduce((a, c) => a + c.qty *c.price, 0)
  const itemsPrice = cartItems.reduce((a, c) => {
    if (addOnPrice) {
      c.price = addOnPrice
    }
    return a + c.qty * c.price;
  }, 0);
  const totalPrice = itemsPrice;
  const [quantity,setQuantity] = React.useState(0);
  const [totalPrice1,setTotalPrice1] = React.useState(0);
  const cartItem = useSelector(getCartItems);
  React.useEffect(()=>{
    if(cartItem.length > 0){
      let total = 0;
      let quantity1 = 0;
      for (let i = 0; i < cartItem.length; i++) {
        total += cartItem[i].totalPrice;
        quantity1 += cartItem[i].quantity;
        setQuantity(quantity1);
        setTotalPrice1(total);
      }
      localStorage.setItem('quantity',cartItem.length);
      (Math.round(totalPrice1 * 100) / 100).toFixed(2);
    }
  },[cartItem]);

  React.useEffect(()=>{
    localStorage.setItem('price',totalPrice1);
    localStorage.setItem('quantity',quantity);
  },[totalPrice1])

  return (
    <SidebarContainer style={{backgroundColor: cartcolors.secondarybg}} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon style={{color: cartcolors.primarybg}}/>
        </Icon>
        <aside className="block col-1">
          <div style={{color:cartcolors.background}} className="carthead">Cart Items</div>
          <div style={{backgroundColor:cartcolors.secondarybg}} className="cartcontainer">
          {cartItem.length === 0 && <div style={{color:cartcolors.background}} className="emptycart">Cart is empty</div>}
            {cartItem.map((item) =>{
              if(item.quantity > 0){
                return (
                  <GivenItems givenitemcolors={cartcolors} cartItem={item}></GivenItems>
                )
              }
            })}
            {cartItem.length !== 0 && (
          <>
            <hr className="line"></hr>
            <div className="pricearea">
                <span style={{color:cartcolors.background}} className="totalprice">Total Price:</span>
              <span style={{color:cartcolors.background}} className="price">
              ₹{totalPrice1.toFixed(2)}
              </span>
            </div>
            <hr className="line lowerline"></hr>
          </>
        )}
          </div>
          {cartItem.length !== 0 && (
<<<<<<< HEAD
              <Example logincolors={cartcolors} totalPrice={totalPrice1}/>  
=======
              <Example tableNo={tableNo} totalPrice={totalPrice1}/>  
>>>>>>> 866143acbc4453ed8ab420f56516bf149e61fe46
        )}
        </aside>
      
    </SidebarContainer>

  );
};


export default Cart;
