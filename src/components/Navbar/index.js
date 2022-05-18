import React from 'react';
import { Nav, NavLink, NavIcon, Bars, Bars1 } from './NavbarElements';

const Navbar = ({toggleCart , toggle, navdatas}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>{navdatas.brand_name}</NavLink>
        
        <NavIcon onClick={toggleCart}>
        {/* {localStorage.getItem('quantity')} */}
          <p className="cart">Cart<Bars1 /></p>
        </NavIcon>
        <NavIcon onClick={toggle}>
          <p className="menu">Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
