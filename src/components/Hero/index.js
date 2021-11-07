import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Cart from '../Cart';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './HeroElements';
import data from '../Products/data';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpens, setIsCartOpens] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleCart = () => {
    setIsCartOpens(!isCartOpens);
  };

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} toggleCart={toggleCart} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Cart isOpen={isCartOpens} toggle={toggleCart} cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove} />
      <HeroContent>
        <HeroItems>
          <HeroH1><div>The</div> <div>Circle Dream</div></HeroH1>
          <HeroP>NEVER ENDING PIZZA-BILITIES</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
