"use client";

import styled from "styled-components";
import "./Header.css";
import { useEffect, useState } from "react";
import Link from "../../../node_modules/next/link";
import Menu from "../../../Menu/Menu";

// import { AiOutlineMenu } from 'react-icons/ai';

const Home = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  font-size: var(--font-size-smi-9);
  color: var(--color-gray-200);
  display: inline-block;
  width: 2.5rem;
  height: 0.85rem;
`;
const Certificate = styled.div`
  position: absolute;
  top: 0.06rem;
  left: 6.19rem;
  font-size: 0.81rem;
  color: var(--color-gray-100);
  display: inline-block;
  width: 4.37rem;
  height: 0.69rem;
`;
const Vision = styled.div`
  position: absolute;
  top: 0.06rem;
  left: 13.5rem;
  font-size: 0.9rem;
  display: inline-block;
  width: 3.06rem;
  height: 1.49rem;
`;
const AboutUs = styled.div`
  position: absolute;
  top: 0.13rem;
  left: 30.81rem;
  font-size: var(--font-size-xs-8);
  display: inline-block;
  width: 3.31rem;
  height: 1.02rem;
`;
const Mission = styled.div`
  position: absolute;
  top: 0.13rem;
  left: 19.06rem;
  font-size: 0.91rem;
  color: var(--color-snow-100);
  display: inline-block;
  width: 4.27rem;
  height: 1.5rem;
`;
const Register = styled.div`
  position: absolute;
  top: 0.13rem;
  left: 25.44rem;
  color: var(--color-snow-200);
  display: inline-block;
  width: 4.31rem;
  height: 1.09rem;
`;
const Eng = styled.div`
  position: absolute;
  top: 0.13rem;
  left: 37.25rem;
  display: inline-block;
  width: 1.69rem;
  height: 1.13rem;
`;
const HomeParent = styled.div`
  position: absolute;
  top: calc(50% - 13.5px);
  right: 1.81rem;
  width: 38.94rem;
  height: 1.63rem;
`;
const WhatsappImage20230813At1 = styled.img`
  position: absolute;
  top: calc(50% - 30.5px);
  right: 70.44rem;
  width: 7.13rem;
  height: 3.81rem;
  object-fit: cover;
`;
const FrameParent = styled.div`
  position: absolute;
  width: 100%;
  top: 0rem;
  right: 0%;
  left: 0%;
  background-color: var(--color-royalblue);
  height: 3.81rem;
  overflow: hidden;
`;
const Desktop8InnerRoot = styled.div`
  /* position: absolute; */
  width: 100%;
  top: 0rem;
  right: 0%;
  left: 0%;
  height: 3.81rem;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const NavItemsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 600px) {
    display: none;
  }
`;
const HamBerger = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    display: flex;
    flex-direction: column;
    /* position: fixed; */
    z-index: 999;
    gap: 8px;
    /* display: none; */
  }
`;
const HamSpan = styled.div`
  width: 30px;
  height: 2px;
  background: white;
  margin-right: 10px;

  /* list-style: none;
  padding: 0;
  margin: 0; */
  @media (max-width: 600px) {
    /* display: none; */
  }
`;
export const MenuItemsWrapper = styled.ul`
  @media (max-width: 600px) {
    list-style: none;
    padding: 0;
    margin: 0;
    display: block;
    display: flex;
    flex-direction: column;
    float: bottom;
    z-index: 999;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  margin: 5px 0;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${(props) => (props.isSticky ? "fixed" : "static")};
  top: 0;
  z-index: 999;
`;

const Header = ({}) => {
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
  const [MenuBar, setMenuBar] = useState(false);

  return (
    <>
      <NavbarWrapper isSticky={isSticky} class='navbar'>
        <div class='navbar-logo'>
          <img class='nav-logo' src='/bottom-img-1@2x.png' />
        </div>

        <NavItemsWrapper className='nav-items'>
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
          <NavItem
            onClick={() => scrollToContent("Programme")}
            className='items'
          >
            Programme
          </NavItem>
          <NavItem onClick={() => scrollToContent("Mission")} className='items'>
            Mission
          </NavItem>
          <NavItem onClick={() => scrollToContent("Vision")} className='items'>
            Vision
          </NavItem>

          <NavItem
            onClick={() => scrollToContent("Directors")}
            className='items'
          >
            Directors
          </NavItem>
          {/* <li class='items'>line</li> */}
        </NavItemsWrapper>
        {/* <Link href='/Menu'> */}
        <HamBerger onClick={() => setMenuBar(!MenuBar)}>
          <HamSpan></HamSpan>
          <HamSpan></HamSpan>
          <HamSpan></HamSpan>
        </HamBerger>
        {/* </Link> */}
      </NavbarWrapper>
      {MenuBar && <Menu />}
    </>
  );
};

export default Header;

const MenuContainer = styled.div`
  width: 40%;
  height: 80%;
  position: absolute;
  right: 0;
  background: #0000ff;
`;
