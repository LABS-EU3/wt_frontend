import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/core";
import banner from "../assets/banner.jpg";
import SignUpStyle from "../styles/SignupStyles";
import { SIGNUP_MUTATION } from "../graphql/mutations";
import { withApollo } from "react-apollo";

function SignUp({ client }, props) {
  const firstname = useRef();
  const lastname = useRef();
  const password = useRef();
  const email = useRef();

  const { mutate } = client;

  function onSubmit(e) {
    e.preventDefault();

    client
      .mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          firstname: firstname.current.value,
          lastname: lastname.current.value,
          password: password.current.value,
          rePassword: password.current.value,
          email: email.current.value
        }
      })
      .then(response => {
        console.log("Sucess!");
        props.history.push("/login");
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

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
              ref={firstname}
              required
              placeholder="FIRST NAME"
              name="FIRST NAME"
              type="text"
            />
            <input
              ref={lastname}
              required
              placeholder="LAST NAME"
              name="LAST NAME"
              type="text"
            />
            <input
              ref={email}
              required
              placeholder="EMAIL"
              name="EMAIL"
              type="email"
            />
            <input
              ref={password}
              required
              placeholder="PASSWORD"
              name="PASSWORD"
              type="password"
            />
            <input
              ref={password}
              required
              placeholder="RE-ENTER PASSWORD"
              name=" PASSWORD"
              type="password"
            />

            <Button
              className="signup-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
              onClick={onSubmit}
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

export default withApollo(SignUp);
