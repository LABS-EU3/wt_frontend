import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "../common/Input";
import { Button, Checkbox, useToast } from "@chakra-ui/core";
import { isLoggedIn } from "../../utils";
import Logo from "../common/Logo";
import AuthStyle from "./AuthStyle";
import Preview from "../common/Preview";
import { GOOGLE_AUTH_MUTATION } from "../../graphql/mutations";
import { LOGIN_QUERY } from "../../graphql/queries";

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

function Login({ client, history }) {
  const toast = useToast();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required("Please enter your email"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(8, "Must be minimum 8 characters")
    }),

    onSubmit: value => {
      client
        .mutate({
          mutation: LOGIN_QUERY,
          variables: {
            email: value.email,
            password: value.password,
            remember: value.remember
          }
        })
        .then(response => {
          const { token, isNewUser } = response.data.authForm;
          localStorage.setItem(
            "userData",
            JSON.stringify({ token, isNewUser })
          );
          if (isNewUser === true) {
            setLoginSuccess("/onboarding");

            toast({
              title: "Login Successful.",
              description: "You can now complete the onboarding process",
              status: "success",
              duration: 9000,
              isClosable: true
            });
          } else {
            setLoginSuccess("/");
            toast({
              title: "Login Successful.",
              description: "You can now access your dashboard",
              status: "success",
              duration: 9000,
              isClosable: true
            });
          }
        })
        .catch(error => {
          toast({
            title: "An error occurred.",
            description: "Unable to login to your account.",
            status: "error",
            duration: 9000,
            isClosable: true
          });
        });
    }
  });

  if (loginSuccess) {
    history.push(loginSuccess);
    window.location.reload();
  }

  // if user is already logged in, redirect to dashboard
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return <Redirect to="/" />;
  }

  const responseFailureGoogle = error => {
    toast({
      title: "An error occurred.",
      description: "Unable to login to your account.",
      status: "error",
      duration: 9000,
      isClosable: true
    });
  };

  const responseGoogle = response => {
    client
      .mutate({
        mutation: GOOGLE_AUTH_MUTATION,
        variables: {
          accessToken: response.accessToken
        }
      })
      .then(res => {
        const { token, isNewUser, id } = res.data.authGoogle;
        localStorage.setItem(
          "userData",
          JSON.stringify({ token, isNewUser, id })
        );

        if (isNewUser === true) {
          history.push("/onboarding");
        } else {
          history.push("/");
        }

        toast({
          title: "Login Successful.",
          description: "You can now access your dashboard",
          status: "success",
          duration: 9000,
          isClosable: true
        });
      })
      .catch(error => {
        toast({
          title: "An error occurred.",
          description: "Unable to login to your account.",
          status: "error",
          duration: 9000,
          isClosable: true
        });
      });
  };

  return (
    <AuthStyle>
      <div className="auth-container">
        <div className="auth-banner">
          <Preview pageName="Login" />
        </div>

        <div className="auth-form">
          <div className="logo">
            <Logo />
          </div>

          <form onSubmit={formik.handleSubmit}>
            <h2>Login</h2>

            <Input
              id="email"
              name="email"
              placeholder="EMAIL"
              variant="filled"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              bg="#FFFCF2"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.email}
            />

            <Input
              id="password"
              name="password"
              placeholder="PASSWORD"
              variant="filled"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              bg="#FFFCF2"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.password}
            />

            <div className="checkbox">
              <Checkbox
                size="md"
                variantColor="orange"
                onSelect={formik.handleChange}
                value={true}
              >
                Remember me
              </Checkbox>
            </div>

            <Button
              type="submit"
              className="auth-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
              size="lg"
            >
              Login
            </Button>
            <div className="auth-linked-profiles">
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    color="white"
                    bg="#4c8bf5"
                    rightIcon="arrow-forward"
                    width="45%"
                    size="lg"
                  >
                    Login with Google
                  </Button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <Button
                type="submit"
                variantColor="facebook"
                flexShrink="0"
                rightIcon="arrow-forward"
                size="lg"
              >
                Login with Facebook
              </Button>
            </div>

            <Link to="/accountrecovery">Forgot Password?</Link>
            <Link to="/signup" className="link-recovery">
              Don't have an account?
            </Link>
          </form>
        </div>
      </div>
    </AuthStyle>
  );
}

export default withApollo(Login);
