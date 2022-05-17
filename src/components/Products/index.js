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
  onFocusPizza,
  addonPrice,
  setCartItems,
  cartItems,
}) => {
  const [popup, setPopup] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const [showMore, setShowMore] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector(getCartItems);
  const increase = (data) => {
    dispatch(addItemToCartSpecified(data));
    console.log("+++");
  };
  const decrease = (data) => {
    dispatch(RemoveItemToCart(data));
    console.log("---");
  };
  console.log();
  //const [data2, setdata2] = useState(-1);
  return (
    <>
      <div className="hellotesting" ref={scrollRef}></div>

      <ProductsContainer>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {products.map((product, index) => {
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
                      <ProductButton onClick={() => setPopup(index)}>
                        Add to Cart
                      </ProductButton>
                      <Customize>customizable</Customize>
                    </>
                  ) : (
                    <>
                      <ProductButton
                        onClick={() => dispatch(addItemToCart({ product }))}
                      >
                        Add to Cart
                      </ProductButton>
                      {/* <span onClick={decrease} className="remove">
                    -
                  </span>
                    
                  <span onClick={increase({id:product.id,name:product.item_data.name,price:product.cost,productId:product.id})} className="add">
                    +
                  </span> */}
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
