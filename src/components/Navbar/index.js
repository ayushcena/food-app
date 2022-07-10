import React from 'react';
import { Nav, NavLink, NavIcon, Bars, Bars1 } from './NavbarElements';
import './index.css';

const Navbar = ({toggleCart , toggle, navdatas, navcolors, finalquant}) => {
  return (
    <>
      <Nav style={{background: navcolors.background}}>
        <NavLink style={{color:navcolors.secondary}} to='/'>{navdatas.brand_name}</NavLink>
        
        <NavIcon style={{color:navcolors.secondary}} onClick={toggleCart}>
          <p className="cart"> Cart<Bars1 /></p>
        </NavIcon>
        <NavIcon style={{color:navcolors.secondary}} onClick={toggle}>
          <p className="menu">Menu</p>
          <Bars />
        </NavIcon>
        <span className='quant'>{finalquant}</span>
      </Nav>
    </>
  );
};

export default Navbar;
