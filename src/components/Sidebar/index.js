import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';
import './sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink>Pizzas</SidebarLink>
        <SidebarLink to='/'><a href="deserts" id="desert">Desserts</a></SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
