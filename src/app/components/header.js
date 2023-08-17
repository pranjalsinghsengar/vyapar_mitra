import styled from "styled-components";
import "./Header.css";

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
const Header = () => {
  return (
    <div class='navbar'>
      <div class='navbar-logo'>
        <img class='nav-logo' src='' />
      </div>

      <ul class='nav-items'>
        <li class='items'>Home</li>
        <li class='items'>Certificate</li>
        <li class='items'>Vision</li>
        <li class='items'>Mission</li>
        <li class='items'>Register</li>
        <li class='items'>About us</li>
        <li class='items'>Eng</li>
        <li class='items'>line</li>
      </ul>
    </div>
  );
};

export default Header;