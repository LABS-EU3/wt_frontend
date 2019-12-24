import React from "react";
import styled from "styled-components";

import LogoImage from "../../assets/logo.png";

const StyledLogo = styled.div`
  img {
    width: 150px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoImage} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
