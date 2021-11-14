import React from "react";
import styled, { css } from "styled-components";

const StyledImage = styled.img`
  ${({ styleType }) =>
    styleType === "movie" &&
    css`
      width: 100px;
      height: 300px;
    `}
`;

const Image = ({ children, styleType, src, alt }) => {
  return (
    <StyledImage src={src} alt={alt} styleType={styleType}>
      {children}
    </StyledImage>
  );
};

export default Image;
