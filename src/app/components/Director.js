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
`;
const ImageControl = styled.div`
  width: 150px;
  border-radius: 20px;
  overflow: hidden;
`;
const Director = ({ Img_Url, Director_Name,language,id }) => {
  return (
    <DirectorContainer id={id}>
      <ImageControl>
        <img src={Img_Url} alt='' />
      </ImageControl>
      <div>
        {language === "english" ? "Director: " : "निदेशक"}

        <p>{Director_Name}</p>
      </div>
    </DirectorContainer>
  );
};

export default Director;
