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

const Products = ({
  heading,
  products,
  onAdd,
  scrollRef,
  setAddonPrice,
  addonPrice,
  setCartItems,
  cartItems,
  prodcolors
}) => {
  const [popup, setPopup] = useState(-1);
  const dispatch = useDispatch();
  let cartItem = useSelector(getCartItems);
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
  // console.log(products);
  //const [data2, setdata2] = useState(-1);
  return (
    <>
      <div className="hellotesting" ref={scrollRef}></div>

      <ProductsContainer style={{background: prodcolors.background, color:prodcolors.secondary }}>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {products.map((product, index) => {
            // console.log(product);
            return (
              <ProductCard key={index} onAdd={onAdd}>
                {popup !== -1 ? (
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
                  <ProductTitle style={{color: prodcolors.secondarybg}}> {product.item_data.name} </ProductTitle>
                  <ProductDesc style={{color: prodcolors.secondary}}>
                    {/* {showMore ? product.item_data.description : `${product.item_data.description.substring(0, 25)}`}
                    <span 
                      className="btn"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "...show less" : "...show more"}
                    </span> */}{" "}
                    {product.item_data.description}
                  </ProductDesc>
                  <ProductPrice style={{color: prodcolors.secondary}}> ₹{product.cost} </ProductPrice>
                  {(product.extras !== undefined && product.extras !== null) ||
                    (product.variants !== undefined &&
                      product.variants !== null) ? (
                    <>
                      {finder(product.id) ? (<>
                        <ProductButton style={{color: prodcolors.secondary, background: prodcolors.primary}} onClick={() => setPopup(index)}>
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
                      {finder(product.id).quantity > 0 ? (
                        <button onClick={() => {
                          dispatch(addItemToCartSpecified({name:product.item_data.name,price:product.cost,productId:product.id,quantity:1,totalPrice:product.cost}));
                        }} className="add">
                          +
                        </button>
                      ) : (
                        console.log()
                      )}
                      {finder(product.id) ? (
                        <ProductButton style={{color: prodcolors.secondary, background: prodcolors.primary,}}
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
                       console.log()
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
