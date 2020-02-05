import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.png";

import { isLoggedIn } from "../../utils";

const StyledLogo = styled.div`
  padding: 0 2rem;
  img {
    width: 150px;
  }
`;

const isSignedIn = isLoggedIn();

let route = "/";

if (isSignedIn === false) {
  route = "/login";
}

const Logo = () => {
  return (
    <StyledLogo>
      <Link to={route}>
        <img src={LogoImage} alt="Logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
