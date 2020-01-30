import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/core";

import ErrorImage from "../../assets/404.svg";

const StyledNotFound = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 80vh;

  div {
    .image {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .message {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
      align-items: center;

      h2 {
        font-size: 2rem;
        font-weight: bolder;
        font-family: Roboto;
        margin: 1rem 0;
      }

      p {
        color: #757272;
        font-family: Roboto;
        width: 70%;
      }

      a {
        margin: 2rem 0;
      }
    }
  }
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <div>
        <div className="image">
          <img src={ErrorImage} alt="Error" />
        </div>

        <div className="message">
          <h2>Page not found</h2>

          <p>
            We’re sorry but the page you requested for could not be found.
            Please click the button below to go back to the homepage
          </p>

          <Link to="/">
            <Button
              type="submit"
              className="auth-form-button"
              variantColor="orange"
              size="md"
            >
              Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
