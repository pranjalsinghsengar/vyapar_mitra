import React from "react";
import styled from "styled-components";

const DirectorContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  background: var(--color_powderblue);
  margin: 10px 0;
  border-radius: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-13xl);
`;
const Director = ({ Img_Url, Director_Name }) => {
  return (
    <DirectorContainer>
      <img src={Img_Url} alt='' />
      <div>
        Director:
        <p>{Director_Name}</p>
      </div>
    </DirectorContainer>
  );
};

export default Director;
