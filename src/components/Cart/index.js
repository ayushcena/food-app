import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon
} from './CartElements';

const Cart = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
        </SidebarContainer>
  );
};

export default Cart;
