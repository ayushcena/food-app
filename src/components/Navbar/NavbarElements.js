import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaCartPlus, FaList } from 'react-icons/fa';

export const Nav = styled.nav`
  background: rgb(0,0,0,0.7);
  height: 60px;
  font-weight: 500;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 800px) {
    height: 50px;
  }

  @media screen and (max-width: 500px) {
    height: 45px;
  }

  @media screen and (max-width: 400px) {
    height: 38px;
  }

  @media screen and (max-width: 300px) {
    height: 33px;
  }
`;

export const NavLink = styled(Link)`
  background-color: transparent;
  color: #e31837;
  font-size: 2.5rem;
  text-decoration: none;
  margin-left: 10vw;


  @media screen and (max-width: 800px) {
     margin-left: 10vw;
     top: 10px;
     font-size: 2rem;
   }

   @media screen and (max-width: 500px) {
    margin-left: 10vw;
    font-size: 1.7rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 1.22rem;
  }
 `;

export const NavIcon = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  .menu {
    transform: translate(-350%, 80%);
    // font-weight: bold;
    font-size: 1rem;

    @media screen and (max-width: 800px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 0.6rem;
      transform: translate(-335%, 76%);
    }

    @media screen and (max-width: 330px) {
      transform: translate(-310%, 66%);
    }
  }
  .cart {
    transform: translate(-50%, 30%);
    // font-weight: bold;
    font-size: 1rem;

    @media screen and (max-width: 800px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 0.6rem;
      transform: translate( -40%, 30%);
    }

    @media screen and (max-width: 330px) {
      transform: translate(-40%, 20%);
    }
`;
export const Bars1 = styled(FaCartPlus)`
  font-size: 1.7rem;
  transform: translate(15%, 25%);

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
    transform: translate(15%, 25%);
  }

  @media screen and (max-width: 330px) {
    transform: translate(15%, 30%);
  }
`;

export const Bars = styled(FaList)`
  font-size: 1.75rem;
  transform: translate(-310%, -25%);

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
    transform: translate(-300%, -30%);
  }

  @media screen and (max-width: 330px) {
    transform: translate(-280%, -45%);
  }
`;
