import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  // min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  margin-bottom: -5rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 1rem 0rem;
  line-height: 2;
  width: 250px;

  @media screen and (max-width: 750px) {
    width: 250px;
    margin-left: -6px;  }
  
  @media screen and (max-width: 490px) {
    width: 100%;
    display: flex;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: -1.5rem;  
  }

  @media screen and (max-width: 330px) {
    margin-bottom: -0.5rem;  
  }
`;

export const ProductImg = styled.img`
  display: flex;
  margin: auto;
  margin-bottom: -0.6rem;
  height: 180px;
  min-width: 200px;
  max-width: 80%;
  box-shadow: 7px 7px #fdc500;

  &:hover {
    transform: scale(1.08);
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 900px) {
    height: 140px;
    max-width: 70%;
    min-width: 170px;
    box-shadow: 6px 6px #fdc500;
    margin-bottom: -0.8rem;
  }

  @media screen and (max-width: 490px) {
    max-width: 60%;
    min-width: 120px;
    max-height: 60%;
    min-height: 110px;    
    margin-left: 8%;
    margin-top: 0.2rem;
    margin-bottom: 0;
    box-shadow: 3px 3px #fdc500;
  }

  @media screen and (max-width: 490px) {
    max-width: 55%;
    min-width: 105px;
    max-height: 55%;
    min-height: 90px; 
    border-radius: 10px;   
  }

  @media screen and (max-width: 300px) {
    max-width: 50%;
    min-width: 85px;
    max-height: 50%;
    min-height: 80px; 
    border-radius: 8px;
    margin-left: 5%;   
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  margin-top: -3rem;

  @media screen and (max-width: 650px) {
    font-size: 1.6rem;  
  }

  @media screen and (max-width: 500px) {
    font-size: 1.4rem; 
    margin-bottom: 2.5rem;
    margin-top: -4.5rem;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.4rem;
  color: #fdc500;
  line-height: 1;
  margin-bottom: 0.5rem;
  width: 120%;

  @media screen and (max-width: 650px) {
    font-size: 1.2rem;  
  }

  @media screen and (max-width: 490px) {
    margin-top: -2rem;
  }

  @media screen and (max-width: 450px) {
    margin-top: -2rem;
    text-align: left;
    margin-left: 1.3rem;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 370px) {
    font-size: 1rem;
    margin-top: -2.8rem;
    line-height: 1;
  }

  @media screen and (max-width: 490px) and (min-width: 400px) {
    margin-top: -3rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.8rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.3rem;
  width: 120%;
  font-size: 0.9rem;
  line-height: 1.3;
  text-align: justify;

  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
    margin-bottom: 0;  }

  @media screen and (max-width: 650px) {
    font-size: 0.7rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: 490px) {
    font-size: 0.72rem;
    width: 90%;
  }

  @media screen and (max-width: 490px) {
    font-size: 0.68rem;
    width: 100%;    
  }

  @media screen and (max-width: 490px) and (min-width: 400px) {
    width: 90%;
  }

  @media screen and (max-width: 330px) {
  width: 120%;    
  }
`;

export const ProductPrice = styled.p`
  margin-bottom: 0.3rem;
  font-size: 1.5rem;

  @media screen and (max-width: 900px) {
    font-size: 1.3rem;
    margin-bottom: 0;  }

  @media screen and (max-width: 650px) {
    font-size: 1.1rem;
    margin-bottom: 0;  
  }

  @media screen and (max-width: 490px) {
    margin-left: -6rem;
    margin-top:0.5rem;
  }

  @media screen and (max-width: 490px) and (min-width: 400px) {
    margin-left: -8rem;
  }
`;

export const ProductButton = styled.button`
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  display: flex;
  flex-direction: row;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }

  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.4rem;
  }

  @media screen and (max-width: 490px) {
    margin-right: -6rem;
    margin-top: -2rem;
    border-radius: 20px;
  }

  @media screen and (max-width: 490px) and (min-width: 400px) {
    margin-right: -8rem;
    border-radius: 20px;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.4rem;
  }
`;

export const Customize = styled.div`
font-size: 0.6rem;
color: #fcf3c3;
font-family: 'Quicksand', sans-serif;

@media screen and (max-width: 490px) {
  margin-right: -6rem;
  font-size: 0.5rem;
  margin-bottom: 1rem;
}

@media screen and (max-width: 490px) and (min-width: 400px) {
  margin-right: -8rem;
}

@media screen and (max-width: 350px) {
}
`;