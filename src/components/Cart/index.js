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
const Cart = (props) => {
  const { cartItems, onAdd, onRemove, isOpen, toggle, addOnPrice } = props;
  // const itemsPrice = addOnPrice ? addOnPrice : cartItems.reduce((a, c) => a + c.qty *c.price, 0)
  const itemsPrice = cartItems.reduce((a, c) => {
    if (addOnPrice) {
      c.price = addOnPrice
    }
    return a + c.qty * c.price;
  }, 0);
  const totalPrice = itemsPrice;
  const [totalPrice1,setTotalPrice1] = React.useState(0);
  const cartItem = useSelector(getCartItems);
  let totalprice = 0;
  React.useEffect(()=>{
    if(cartItem.length > 0){
      let total = 0;
      for (let i = 0; i < cartItem.length; i++) {
        console.log(cartItem);
        total += cartItem[i].totalPrice;
        setTotalPrice1(total);
      }
      (Math.round(totalPrice1 * 100) / 100).toFixed(2)
    }
    // console.log(cartItem);
  },[cartItem]);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon >
        <span className="closeicon" onClick={toggle}>X</span>
        <aside className="block col-1">
          <div className="carthead">Cart Items</div>
          <div className="cartcontainer">
            {cartItem.map((item) =>{
              console.log(item);
              if(item.quantity > 0){
                return (
                  <GivenItems cartItem={item}></GivenItems>
                )
              }
            })}
            <h2>Total Price : {totalPrice1}</h2>
          </div>
        </aside>
      </Icon>
    </SidebarContainer>

  );
};

export default Cart;
