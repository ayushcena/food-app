import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Cart from "../Cart";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";
import Products from "../Products";
import axios from "axios";
import { getCartItems } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import { getQuantitys } from "../../store/cartSlice";
const Hero = ({apidatas, colorData,tableNo, bannerImg}) => {
  // localstorage.getitem('quantity')
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpens, setIsCartOpens] = useState(false);
  const [addonPrice, setAddonPrice] = useState(0);
  const [res, setRes] = useState([]);
  const [scroll, setScroll] = useState({});
  const onFocusPizza = useRef(null);

  const cartItem = useSelector(getCartItems);
  const FinalQ = useSelector(getQuantitys);
  console.log(FinalQ);
  React.useEffect(() => {
    if (cartItem.length > 0) {
      localStorage.setItem("quantity", cartItem.length);
    }
  }, [cartItem]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleCart = () => {
    setIsCartOpens(!isCartOpens);
  };
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    // console.log("inside on add func");
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      // console.log("inside else statement");
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
  async function getOrderDetails() {
    try {
      await axios
        .get("https://api.eatx.in/api/v3/item/items/130/?key=tcd")
        .then((response) => {
          console.log("itemsssssssssss",response.data);
          setRes(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrderDetails();
  }, []);
  useEffect(() => {
    console.log(res);

    res.map((cat) => {
      setScroll((old) => {
        return {
          ...old,
          [cat.category]: {
            ref: React.createRef(),
            heading: cat.items.length > 0 ? false : true,
            subHeading: cat.items.length > 0 ? true : false,
          },
        };
      });
    });
  }, [res]);
  return (
    <HeroContainer style={{background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${bannerImg.web_image})`,backgroundPosition:"center", backgroundSize:"cover"}}>
      <Navbar finalquant={FinalQ} toggle={toggle} toggleCart={toggleCart} navdatas={apidatas} navcolors={colorData}/>
      <Sidebar
        scroll={scroll}
        onFocusPizza={onFocusPizza}
        isOpen={isOpen}
        toggle={toggle}
        sidecolors={colorData}
      />
      <Cart
        isOpen={isCartOpens}
        toggle={toggleCart}
        cartItems={cartItems}
        addOnPrice={addonPrice}
        onAdd={onAdd}
        onRemove={onRemove}
        cartcolors={colorData}
        tableNo={tableNo}
      />
      <HeroContent>
        <HeroItems style={{color: colorData.secondary}}>
          <HeroH1 style={{color: colorData.primary}}>
            <div>{apidatas.brand_name}</div>
          </HeroH1>
          <HeroP>{apidatas.caption}</HeroP>
        </HeroItems>
      </HeroContent>
      {res.map((cat) => {
        return (
          <Products
            scrollRef={scroll[cat.category]}
            heading={cat.category}
            products={cat.items}
            onAdd={onAdd}
            setCartItems={setCartItems}
            cartItems={cartItems}
            addonPrice={addonPrice}
            setAddonPrice={setAddonPrice}
            prodcolors={colorData}
          />
        );
      })}
      {/* <Footer footcolors={colorData} footdatas={apidatas}/> */}
    </HeroContainer>
  );
};

export default Hero;
