import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Button } from "@chakra-ui/core";
import banner from "../assets/banner.jpg";
import SignUpStyle from "../styles/SignupStyles";
import { withApollo } from "react-apollo";
import { GOOGLE_AUTH_MUTATION } from "../graphql/mutations";

function SignUp({ client, history }) {
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
          history.push("/app");
        } else {
          history.push("/signup");
        }
      })

      .catch(error => console.log(error));
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
                clientId="970094315674-fv6hgk4uta5tmpa91poc6444qlqt9e96.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
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
