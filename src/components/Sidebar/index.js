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

const Sidebar = ({ scroll, isOpen, toggle, sidecolors }) => {
  const scrollArray = Object.keys(scroll).map((key) => [key, scroll[key]]);
  // console.log(scrollArray);
  return (
    <SidebarContainer style={{background:sidecolors.secondarybg}} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon style={{color:sidecolors.background}}/>
      </Icon>
      <SidebarMenu onClick={toggle}>
        {scrollArray.map((item,index) => (
          
          <SidebarLink onClick={() => item[1].current.scrollIntoView()}>
            {/* {console.log('aaaaaaaaaaaa',item[1])} */}
            {item[1].heading?<Bigtext style={{color: sidecolors.primary}}>{item[0]}</Bigtext>: <Smalltext style={{color: sidecolors.background}}>{item[0]}</Smalltext>}
           
          </SidebarLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
