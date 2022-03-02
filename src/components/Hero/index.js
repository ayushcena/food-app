import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cart from "../Cart";
import data from "../Products/data";
import Footer from "../Footer";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";
import Products from "../Products";
import axios from "axios";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpens, setIsCartOpens] = useState(false);
  const [addonPrice, setAddonPrice] = useState(0);
  const [res, setRes] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleCart = () => {
    setIsCartOpens(!isCartOpens);
  };
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    console.log("inside on add func");
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      console.log("inside else statement");
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems);
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
  async function getOrderDetails() {
    try {
      await axios
        .get("https://api.eatx.in/api/v3/item/items/130/?key=tcd")
        .then((response) => {
          console.log(response.data);
          setRes(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => getOrderDetails(), []);
  return (
    <HeroContainer>
      <Navbar toggle={toggle} toggleCart={toggleCart} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Cart
        isOpen={isCartOpens}
        toggle={toggleCart}
        cartItems={cartItems}
        addOnPrice={addonPrice}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <HeroContent>
        <HeroItems>
          <HeroH1>
            <div>The</div> <div>Circle Dream</div>
          </HeroH1>
          <HeroP>NEVER ENDING PIZZA-BILITIES</HeroP>
        </HeroItems>
      </HeroContent>
      {res.map((cat) => (
        <Products
          heading={cat.category}
          products={cat.items}
          onAdd={onAdd}
          setCartItems={setCartItems}
          cartItems={cartItems}
          addonPrice={addonPrice}
          setAddonPrice={setAddonPrice}
        />
      ))}
      <Footer />
    </HeroContainer>
  );
};

export default Hero;
