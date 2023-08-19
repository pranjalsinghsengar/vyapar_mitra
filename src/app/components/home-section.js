"use client";

import styled from "styled-components";

const FrameChild = styled.div`
  position: absolute;
  bottom: 0rem;
  left: calc(50% - 720px);
  background-color: var(--color-black);
  width: 90rem;
  height: 27.44rem;
`;
const Home = styled.div`
  position: absolute;
  bottom: 16.59rem;
  left: 0.29rem;
  font-weight: 800;
  display: inline-block;
  width: 7.07rem;
  height: 3.21rem;
`;
const AboutUs = styled.div`
  position: absolute;
  bottom: 8.59rem;
  left: 0.29rem;
  font-weight: 800;
  display: inline-block;
  width: 10.05rem;
  height: 3.21rem;
`;
const ContactUs = styled.div`
  position: absolute;
  bottom: 0.58rem;
  left: 0rem;
  font-weight: 800;
  display: inline-block;
  width: 12.38rem;
  height: 3.21rem;
`;
const AboutProgramme = styled.div`
  position: absolute;
  top: calc(50% - 164.47px);
  left: calc(50% - 152.79px);
  font-weight: 800;
  display: inline-block;
  width: 12.56rem;
  height: 4.44rem;
`;
const OurMission = styled.div`
  position: absolute;
  top: calc(50% - 22.43px);
  left: calc(50% - 152.79px);
  font-weight: 800;
  display: inline-block;
  width: 12.56rem;
  height: 3.21rem;
`;
const OurVision = styled.div`
  position: absolute;
  top: calc(50% + 113.07px);
  left: calc(50% - 152.79px);
  font-weight: 800;
  display: inline-block;
  width: 10.69rem;
  height: 3.21rem;
`;
const ConnectWithUs = styled.div`
  position: absolute;
  right: 0rem;
  bottom: 17.17rem;
  font-weight: 800;
  display: inline-block;
  width: 18.46rem;
  height: 3.21rem;
`;
const Goal = styled.div`
  position: absolute;
  right: 11.39rem;
  bottom: 8.76rem;
  font-weight: 800;
  display: inline-block;
  width: 7.07rem;
  height: 3.21rem;
`;
const Register = styled.div`
  position: absolute;
  right: 7.13rem;
  bottom: 0.18rem;
  font-weight: 800;
  display: inline-block;
  width: 11.33rem;
  height: 3.21rem;
`;
const HomeParent = styled.div`
  position: absolute;
  width: 79.24%;
  top: calc(50% - 156.44px);
  right: 9.38%;
  left: 11.39%;
  height: 20.56rem;
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  width: 100%;
  right: 0%;
  bottom: 0rem;
  left: 0%;
  height: 27.44rem;
  text-align: left;
  font-size: var(--font-size-10xl-9);
  color: var(--color-gray-300);
  font-family: var(--font-inter);
`;
const HomeSection = () => {
  return (
    <RectangleParentRoot>
      <FrameChild />
      <HomeParent>
        <Home>Home</Home>
        <AboutUs>About us</AboutUs>
        <ContactUs>Contact us</ContactUs>
        <AboutProgramme>About programme</AboutProgramme>
        <OurMission>Our mission</OurMission>
        <OurVision>Our Vision</OurVision>
        <ConnectWithUs>Connect With Us</ConnectWithUs>
        <Goal>Goal</Goal>
        <Register>Register</Register>
      </HomeParent>
    </RectangleParentRoot>
  );
};

export default HomeSection;
