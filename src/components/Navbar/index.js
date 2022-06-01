import React from 'react';
import { Nav, NavLink, NavIcon, Bars, Bars1 } from './NavbarElements';

const Navbar = ({toggleCart , toggle, navdatas, navcolors, finalquant}) => {
  return (
    <>
      <Nav style={{background: navcolors.background}}>
        <NavLink style={{color:navcolors.secondary}} to='/'>{navdatas.brand_name}</NavLink>
        
        <NavIcon style={{color:navcolors.secondary}} onClick={toggleCart}>
        {/* {localStorage.getItem('quantity')} */}
          <p className="cart"> Cart<Bars1 /></p>
        </NavIcon>
        <NavIcon style={{color:navcolors.secondary}} onClick={toggle}>
          <p className="menu">Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
