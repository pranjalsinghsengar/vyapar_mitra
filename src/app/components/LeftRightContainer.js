import React from "react";
import { styled } from "styled-components";
export const Container = styled.div`
  width: 80%;
  height: 40%;
  /* background-color: pink; */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: space-around;
  position: relative;
`;
export const LeftContainer = styled.div`
  width: 45%;
  /* height: 80%; */
  /* background-color: blue; */
  font-size: 1rem;
`;
export const RightContainer = styled.div`
  width: 45%;
  /* height: 80%; */
  /* background-color: blue; */
`;
export const H1 = styled.h1`
  color: #1c40fe;
  font-size: 3rem;
  font-weight: 500;
`;
export const P = styled.p`
  font-size: var(--font-size-3xl-9);
`;

const LeftRightContainer = ({ Heading, pera, Img_source, flexDirection }) => {
  return (
    <Container flexDirection={flexDirection}>
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
