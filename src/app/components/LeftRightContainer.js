"use client";

import React from "react";
import { styled } from "styled-components";


export const Container = styled.div`
  width: 80%;
  height: 40%;
  margin: 20px 0;
  /* background-color: pink; */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: space-around;
  position: relative;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;


export const LeftContainer = styled.div`
  width: 45%;
  /* height: 80%; */
  /* background-color: blue; */
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    width: 90%;
  }
`;
export const RightContainer = styled.div`
  width: 45%;
  /* height: 80%; */
  /* background-color: blue; */

  @media (max-width: 600px) {
    width: 90%;
  }
`;
export const H1 = styled.h1`
  color: #1c40fe;
  /* font-size: 3rem; */
  font-weight: 900;
  font-size: 1.5rem;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;
export const P = styled.p`
  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const LeftRightContainer = ({
  Heading,
  pera,
  Img_source,
  flexDirection,
  id,
}) => {
  return (
    <Container flexDirection={flexDirection} id={id}>
      <LeftContainer>
        <H1>{Heading}</H1>
        <P>{pera}</P>
      </LeftContainer>
      <RightContainer>
        <img src={Img_source} alt='' />
      </RightContainer>
    </Container>
  );
};

export default LeftRightContainer;
