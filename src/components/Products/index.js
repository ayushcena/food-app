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

const Products = ({ heading, data, onAdd }) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      {popup ? <Addons pizza={data} setPopup={setPopup} /> : false}
      <ProductsContainer>
        <ProductsHeading> {heading} </ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index} onAdd={onAdd}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle> {product.name} </ProductTitle>
                  <ProductDesc> {product.desc} </ProductDesc>
                  <ProductPrice> {product.price} </ProductPrice>
                  {product.category==='addon'? <ProductButton onClick={() => setPopup(!popup)}>
                    {product.button}
                  </ProductButton>:<ProductButton onClick={() => onAdd(product)}>
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
