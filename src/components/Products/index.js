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
  Customize,
} from "./ProductsElements";
import { addItemToCart } from "../../store/cartSlice";
import { getCartItems } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  RemoveItemToCart,
  addItemToCartSpecified,
} from "../../store/cartSlice";
const find = require('array-find');

const Products = ({
  heading,
  products,
  onAdd,
  scrollRef,
  setAddonPrice,
  onFocusPizza,
  addonPrice,
  setCartItems,
  cartItems,
  prodcolors
}) => {
  const [popup, setPopup] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(0);
  const dispatch = useDispatch();
  let cartItem = useSelector(getCartItems);
  console.log(cartItem);
  let ids = [];
  for (let i = 0; i < cartItem.length; i++) {
    ids.push(cartItem[i].productId);
  }
  function finder(ID) {
    for (let i = 0; i < cartItem.length; i++) {
      const element = cartItem[i];
      if (element.productId === ID) {
        return element;
      }
    }
    return false;
  }
  const increase = (data) => {
    console.log(data);
  };
  const decrease = (data) => {
    dispatch(RemoveItemToCart(data));
  };
  //const [data2, setdata2] = useState(-1);
  return (
    <>
      <div className="hellotesting" ref={scrollRef}></div>

      <ProductsContainer style={{ background: prodcolors.background, color: prodcolors.primary }}>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {products.map((product, index) => {
            console.log(product);
            return (
              <ProductCard key={index} onAdd={onAdd}>
                {popup != -1 ? (
                  <Addons
                    pizza={products[popup]}
                    setPopup={setPopup}
                    addonPrice={addonPrice}
                    setAddonPrice={setAddonPrice}
                    onAdd={onAdd}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                  />
                ) : (
                  false
                )}
                <ProductImg
                  src={"https://api.eatx.in/media/" + product.item_data.pic4mob}

                // alt={product.item_data.name}
                />
                <ProductInfo>
                  <ProductTitle> {product.item_data.name} </ProductTitle>
                  <ProductDesc>
                    {/* {showMore ? product.item_data.description : `${product.item_data.description.substring(0, 25)}`}
                    <span 
                      className="btn"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "...show less" : "...show more"}
                    </span> */}{" "}
                    {product.item_data.description}
                  </ProductDesc>
                  <ProductPrice> ₹{product.cost} </ProductPrice>
                  {(product.extras !== undefined && product.extras !== null) ||
                    (product.variants !== undefined &&
                      product.variants !== null) ? (
                    <>
                      {finder(product.id) ? (<>
                        <ProductButton onClick={() => setPopup(index)}>
                          {finder(product.id).quantity > 0 ? (finder(product.id).quantity) : (<>Add To Cart</>)}
                        </ProductButton></>) : (<>
                          <ProductButton onClick={() => setPopup(index)}>
                            Add to Cart
                          </ProductButton>
                        </>)}
                      <Customize>customizable</Customize>
                    </>
                  ) : (
                    <>
                      <button onClick={() => {
                        dispatch(addItemToCartSpecified({ name: product.item_data.name, price: product.cost, productId: product.id, quantity: 1, totalPrice: product.cost }));
                      }} className="add">
                        +
                      </button>
                      {finder(product.id) ? (
                        <ProductButton
                          onClick={() => dispatch(addItemToCart({ product }))}
                        >
                          {finder(product.id).quantity > 0 ? (finder(product.id).quantity) : (<>Add To Cart</>)}
                        </ProductButton>
                      ) : (
                        <ProductButton
                          onClick={() => dispatch(addItemToCart({ product }))}
                        >
                          Add to Cart
                        </ProductButton>
                      )}
                      {finder(product.id).quantity > 0 ? (
                        <button onClick={() => {
                          dispatch(RemoveItemToCart({ name: product.item_data.name, price: product.cost, productId: product.id, quantity: 1, totalPrice: product.cost }));
                        }} className="remove">
                          -
                        </button>
                      ) : (
                        <button className="remove">
                          -
                        </button>
                      )}
                    </>
                  )}
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
