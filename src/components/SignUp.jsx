import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Button, useToast } from "@chakra-ui/core";
import banner from "../assets/banner.jpg";
import SignUpStyle from "../styles/SignupStyles";
import { withApollo } from "react-apollo";
import { GOOGLE_AUTH_MUTATION } from "../graphql/mutations";

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

function SignUp({ client, history }) {
  const toast = useToast();

  const responseFailureGoogle = error => {
    console.log(error);
    toast({
      title: "An error occurred.",
      description: "Unable to login to your account.",
      status: "error",
      duration: 9000,
      isClosable: true
    });
  };

  const responseGoogle = response => {
    console.log(response.accessToken);
    client
      .mutate({
        mutation: GOOGLE_AUTH_MUTATION,
        variables: {
          accessToken: response.accessToken
        }
      })
      .then(res => {
        console.log(res);
        const { token, isNewUser } = res.data.authGoogle;
        console.log(token);
        localStorage.setItem("userData", JSON.stringify({ token, isNewUser }));
        if (isNewUser === true) {
          history.push("/onboarding");
        } else {
          history.push("/signup");
        }
        toast({
          title: "Sign in Successful.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true
        });
      })
      .catch(error => {
        console.log(error);
        toast({
          title: "An error occurred.",
          description: "Unable to sign in to your account.",
          status: "error",
          duration: 9000,
          isClosable: true
        });
      });
  };

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
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={"single_host_origin"}
              />

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
