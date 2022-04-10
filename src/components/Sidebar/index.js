import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  Smalltext,
  Bigtext
} from "./SidebarElements";
import "./sidebar.css";

const Sidebar = ({ scroll, isOpen, toggle }) => {
  const scrollArray = Object.keys(scroll).map((key) => [key, scroll[key]]);
  // console.log(scrollArray);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu onClick={toggle}>
        {scrollArray.map((item,index) => (
          
          <SidebarLink onClick={() => item[1].current.scrollIntoView()}>
            {console.log('aaaaaaaaaaaa',item)}
            {item[0] === 'PIZZA'? <Smalltext>xxxx</Smalltext>: <Bigtext></Bigtext> }
            {item[0]}
          </SidebarLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
