import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/core";
import banner from "../assets/banner.jpg";
import SignUpStyle from "../styles/SignupStyles";

function SignUp() {
  return (
    <SignUpStyle>
      <div className="signup-container">
        <div className="signup-banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="signup-form">
          <form>
            <h2>Sign up</h2>
            <input
              required
              placeholder="FIRST NAME"
              name="FIRST NAME"
              type="text"
            />
            <input
              required
              placeholder="LAST NAME"
              name="LAST NAME"
              type="text"
            />
            <input required placeholder="EMAIL" name="EMAIL" type="email" />
            <input
              required
              placeholder="PASSWORD"
              name="PASSWORD"
              type="password"
            />
            <Button
              className="signup-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
            >
              Sign up
            </Button>
            <div className="signup-linked-profiles">
              <Button
                className="signup-linked-button"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Google
              </Button>
              <Button
                className="signup-linked-button"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Facebook
              </Button>
            </div>
            <Link to="/">Already have an account?</Link>
          </form>
        </div>
      </div>
    </SignUpStyle>
  );
}

export default SignUp;
