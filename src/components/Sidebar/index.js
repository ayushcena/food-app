import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import "./sidebar.css";

const Sidebar = ({ scroll, isOpen, toggle }) => {
  console.log(scroll);
  const scrollArray = Object.keys(scroll).map((key) => [key, scroll[key]]);
  // console.log(scrollArray);
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu onClick={toggle}>
        {scrollArray.map((item) => (
          <SidebarLink onClick={() => item[1].current.scrollIntoView()}>
            {item[0]}
          </SidebarLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
