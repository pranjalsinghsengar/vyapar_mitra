import { MenuItemsWrapper, NavItem } from "@/app/components/header";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const MenuContainer = styled.div`
  width: 40%;
  height: 400px;
  position: absolute;
  position: fixed;
  right: 0;
  background: #0000ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  z-index: 50;
`;
const Menu = () => {
  const scrollToContent = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <MenuContainer>
      <MenuItemsWrapper className='nav-items'>
        {/* <li class='items'>Home</li> */}
        <NavItem
          onClick={() => scrollToContent("certificate")}
          className='items'
        >
          Certificate
        </NavItem>
        <NavItem onClick={() => scrollToContent("About")} className='items'>
          About
        </NavItem>
        <NavItem onClick={() => scrollToContent("Programme")} className='items'>
          Programme
        </NavItem>
        <NavItem onClick={() => scrollToContent("Mission")} className='items'>
          Mission
        </NavItem>
        <NavItem onClick={() => scrollToContent("Vision")} className='items'>
          Vision
        </NavItem>

        <NavItem onClick={() => scrollToContent("Directors")} className='items'>
          Directors
        </NavItem>
        {/* <li class='items'>line</li> */}
      </MenuItemsWrapper>
    </MenuContainer>
  );
};

export default Menu;
