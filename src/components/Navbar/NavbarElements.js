import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaCartPlus, FaList } from 'react-icons/fa';

export const Nav = styled.nav`
  height: 60px;
  font-weight: 500;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 800px) {
    height: 50px;
  }

  @media screen and (max-width: 600px) {
    height: 46px;
  }

  @media screen and (max-width: 500px) {
    height: 45px;
  }

  @media screen and (max-width: 400px) {
    height: 38px;
  }

  @media screen and (max-width: 310px) {
    height: 33px;
  }
`;

export const NavLink = styled(Link)`
  background-color: transparent;
  color: white;
  font-size: 2.5rem;
  text-decoration: none;
  margin-left: 38vw;

  @media screen and (max-width: 900px) {
    margin-left: 36vw;
    font-size: 2.3rem;
  }

  @media screen and (max-width: 800px) {
     margin-left: 33vw;
    //  top: 10px;
     font-size: 2rem;
   }

   @media screen and (max-width: 600px) {
    margin-left: 33.3vw;
    // top: -15px;
    font-size: 1.5rem;
  }

   @media screen and (max-width: 500px) {
    margin-left: 30vw;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 340px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 310px) {
    font-size: 1rem;
    margin-left: 30vw;
  }
 `;

export const NavIcon = styled.div`
  display: block;
  position: fixed;
  top: 0;
  // right: 0;
  cursor: pointer;
  color: #fff;

  .menu {
    transform: translate(160%, 80%);
    // font-weight: bold;
    font-size: 1rem;

    @media screen and (max-width: 800px) {
      font-size: 0.8rem;
    }

    @media screen and (max-width: 600px) {
      transform: translate(160%, 62%);
      font-size:0.8rem;
      margin-top:-2.3px;
    }

    @media screen and (max-width: 400px) {
      // font-size: 0.6rem;
      transform: translate(120%, 52%);
    }

    @media screen and (max-width: 340px) {
      // transform: translate(-2080%, 66%);
      font-size:0.7rem;
      transform: translate(90%, 52%);
    }
  }
  .cart {
    // transform: translate(0, 60%);
    // margin-top: -18px;
    margin-left:93.4vw;
    // font-weight: bold;
    font-size: 1rem;
    transform: translate(-55%, 28%);

    @media screen and (max-width:1350px) {
      margin-left:91vw;
      transform: translate(-55%, 28%);
    }

    @media screen and (max-width:1200px) {
      margin-left:89.8vw;
      transform: translate(-35%, 25%);
    }

    @media screen and (max-width:1100px) {
      margin-left:89.2vw;
      transform: translate(-25%, 25%);
    }

    @media screen and (max-width:1000px) {
      margin-left:88.5vw;
      transform: translate(-25%, 25%);
    }

    @media screen and (max-width:950px) {
      margin-left:87.8vw;
      transform: translate(-20%, 30%);
    }

    @media screen and (max-width:900px) {
      margin-left:86.8vw;
      transform: translate(-12%, 20%);
    }

    @media screen and (max-width: 800px) {
      font-size: 0.8rem;
      margin-left:85.8vw;
      transform: translate(-5%, 15%);
    }

    @media screen and (max-width: 750px) {
      margin-left:85.8vw;
      transform: translate(-5%, 15%);
    }

    @media screen and (max-width: 700px) {
      margin-left:85.8vw;
      transform: translate(-10%, 15%);
    }

    @media screen and (max-width: 650px) {
      margin-left:84.8vw;
      transform: translate(-10%, 15%);
      font-size: 0.8rem;
    }

    @media screen and (max-width: 550px) {
      margin-left:83vw;
      font-size: 0.7rem;
      transform: translate(-7%, -6%);
    }

    @media screen and (max-width: 400px) {
      transform: translate(-7%, -6%);
      font-size: 0.7rem;
    }

    @media screen and (max-width: 340px) {
      transform: translate(-7%, -6%);
      font-size: 0.7rem;
    }
`;
export const Bars1 = styled(FaCartPlus)`
  font-size: 1.7rem;
  margin-left:0.3vw;
  margin-right:0.5vw;
  margin-top:4px;
  transform: translate(0%, 25%);

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
    transform: translate(-10%, 30%);
  }

  @media screen and (max-width: 340px) {
    // transform: translate(0%, -30%);
    font-size:1rem;
    transform: translate(-5%, 25%);
  }
`;

export const Bars = styled(FaList)`
  font-size: 1.75rem;
  transform: translate(100%, -25%);

  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: -3px;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.25rem;
    transform: translate(65%, -32%);
  }

  @media screen and (max-width: 340px) {
    transform: translate(30%, -58%);
    font-size:1rem;
  }
`;
