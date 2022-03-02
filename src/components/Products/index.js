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
import { addItemToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = ({
  heading,
  products,
  onAdd,
  setAddonPrice,
  addonPrice,
  setCartItems,
  cartItems,
}) => {
  const [popup, setPopup] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  console.log(products);
  //const [data2, setdata2] = useState(-1);
  return (
    <>
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
                  src={product.pic4mob}
                  alt={product.item_data.name}
                />
                <ProductInfo>
                  <ProductTitle> {product.name} </ProductTitle>
                  <ProductDesc> {product.item_data.description} </ProductDesc>
                  <ProductPrice> {product.cost} </ProductPrice>
                  {product.category === "addon" ? (
                    <ProductButton onClick={() => setPopup(index)}>
                      Add to Cart
                    </ProductButton>
                  ) : (
                    <ProductButton
                      onClick={() =>
                        dispatch(addItemToCart({ product, quantity }))
                      }
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
