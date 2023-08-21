"use client";

import React from "react";
import styled from "styled-components";

const DirectorContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  background: var(--color_powderblue);
  margin: 10px 0;
  border-radius: 20px;
  /* gap: 50px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: var(--font-size-13xl);
  @media (max-width: 600px) {
    width: 90%;
    padding: 40px 0;
  }
`;
const ImageControl = styled.div`
  width: 30%;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 25%;

  }
`;
const DirectorName = styled.div`
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Director = ({ Img_Url, Director_Name, language, id }) => {
  return (
    <DirectorContainer id={id}>
      <ImageControl>
        <img src={Img_Url} alt='' />
      </ImageControl>
      <DirectorName>
        {language === "english" ? "Director: " : "निदेशक"}

        <p>{Director_Name}</p>
      </DirectorName>
    </DirectorContainer>
  );
};

export default Director;
