import React from 'react';
import { Nav, NavLink, NavIcon, Bars, Bars1 } from './NavbarElements';

const Navbar = ({toggleCart , toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>The Circle Dream</NavLink>
        <NavIcon onClick={toggle}>
          <p className="menu">Menu</p>
          <Bars />
        </NavIcon>
        <NavIcon onClick={toggleCart}>
          <p className="cart">Cart<Bars1 /></p>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
