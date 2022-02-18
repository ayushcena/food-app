import React, { useState } from "react";
import Addons from "../Addons/Addons";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";
import {addItemToCart} from '../../store/cartSlice';
import { useDispatch } from "react-redux";

const Products = ({ heading, data, onAdd, onAddForAddons,setAddonPrice, addonPrice,setCartItems, cartItems }) => {
  const [popup, setPopup] = useState(-1);
  const [quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <>
      <ProductsContainer>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index} onAdd={onAdd}>
              {popup!=-1 ? <Addons pizza={data[popup]} setPopup={setPopup} addonPrice={addonPrice} setAddonPrice={setAddonPrice} onAdd={onAdd} setCartItems={setCartItems} cartItems={cartItems}/> : false}
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle> {product.name} </ProductTitle>
                  <ProductDesc> {product.desc} </ProductDesc>
                  <ProductPrice> {product.price} </ProductPrice>
                  {product.category==='addon'? <ProductButton onClick={() => setPopup(index)}>
                    {product.button}
                  </ProductButton>:<ProductButton onClick={() => dispatch(addItemToCart({product,quantity}))}>
                    {product.button}
                  </ProductButton>}
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </>
  );
};

export default Products;
