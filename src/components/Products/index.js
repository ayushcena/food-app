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
  Customize
} from "./ProductsElements";
import { addItemToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = ({
  heading,
  products,
  onAdd,scrollRef,
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
  //const [data2, setdata2] = useState(-1);
  return (
    <>

        <div className="hellotesting" ref={scrollRef}></div>
     
      <ProductsContainer>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {products.map((product, index) => {
            // console.log(product);
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
                  src={product.pic4mob}
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
                    <ProductButton
                      onClick={() => dispatch(addItemToCart({ product }))}
                    >
                      Add to Cart
                    </ProductButton>
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
