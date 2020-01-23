import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { isLoggedIn } from "../../utils";

const isSignedIn = isLoggedIn();

const StyledFooter = styled.footer`
  background-color: black;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem 0;
  color: white;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
  p {
    padding-left: 2rem;
    font-family: "Ubuntu", sans-serif;

    @media only screen and (max-width: 500px) {
      padding: 2rem 0;
      width: 100%;
      text-align: center;
    }
  }

  .socials {
    color: white;
    padding-right: 2rem;

    @media only screen and (max-width: 500px) {
      padding-right: 0;
    }

    i {
      transition: all 0.4s ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
    }

    span {
      padding: 0 0.5rem;
    }
  }
`;

const Footer = ({ location }) => {
  if (isSignedIn === true && location.pathname !== "/onboarding") {
    return (
      <StyledFooter>
        <p>&copy; 2020 trackdrills</p>

        <div class="socials">
          <a href="##">
            <span>
              {" "}
              <i class="fas fa-2x fa-envelope"></i>
            </span>
          </a>
          <a href="##">
            <span>
              <i class="fab fa-2x fa-twitter"></i>
            </span>
          </a>

          <a href="##">
            <span>
              {" "}
              <i class="fab fa-2x fa-linkedin"></i>
            </span>
          </a>

          <a href="##">
            <span>
              {" "}
              <i class="fab fa-2x fa-facebook-square"></i>
            </span>
          </a>
        </div>

        <div class="scroll"></div>
      </StyledFooter>
    );
  } else {
    return null;
  }
};

export default withRouter(Footer);
