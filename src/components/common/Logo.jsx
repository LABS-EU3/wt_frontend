import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.png";

const StyledLogo = styled.div`
  img {
    width: 150px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img src={LogoImage} alt="Logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
