import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 450px) {
    height: 400px
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  // text-transform: uppercase;
  line-height: 1;
  font-weight: 500;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  font-weight: 500;
  color: #e31837;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));

  @media screen and (max-width: 350px) {
    font-size: 2.3rem;
    letter-spacing: 2.5px;
  }

  @media screen and (max-width: 305px) {
    font-size: 2.1rem;
    letter-spacing: 2px;
  }
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;

  @media screen and (max-width: 350px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 305px) {
    font-size: 1.6rem;
  }
`;

