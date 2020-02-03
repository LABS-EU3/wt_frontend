import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link, Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "../common/Input";
import { Button, Checkbox, useToast } from "@chakra-ui/core";
import PropTypes from "prop-types";
import { isLoggedIn } from "../../utils";
import Logo from "../common/Logo";
import AuthStyle from "./AuthStyle";
import Preview from "../common/Preview";
import { GOOGLE_AUTH_MUTATION } from "../../graphql/mutations";
import { LOGIN_QUERY } from "../../graphql/queries";

import { Plugins } from "@capacitor/core";
import "@codetrix-studio/capacitor-google-auth";

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

function Login({ client, history }) {
  const toast = useToast();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };
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
      setLoading(true);
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
          console.log(response);
          const { token, isNewUser } = response.data.authForm;
          localStorage.setItem(
            "userData",
            JSON.stringify({ token, isNewUser })
          );
          setLoading(false);
          if (isNewUser === true) {
            setLoginSuccess("/onboarding");
            alert(
              "Login Successful.",
              "You can now complete the onboarding process",
              "success"
            );
          } else {
            setLoginSuccess("/");
            alert(
              "Login Successful.",
              "You can now access your dashboard",
              "success"
            );
          }
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          if (error.graphQLErrors && error.graphQLErrors.length > 0) {
            alert(
              "An error occurred.",
              error.graphQLErrors[0].message,
              "error"
            );
          }
        });
    }
  });

  useEffect(() => {
    const isSignedIn = isLoggedIn();
    // if user is already logged in, redirect to dashboard
    if (isSignedIn === true && loginSuccess === false) {
      setIsSignedIn(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loginSuccess) {
    history.push(loginSuccess);
    window.location.reload();
  }

  // if user is already logged in, redirect to dashboard
  if (isSignedIn === true) {
    return <Redirect to="/" />;
  }

  const responseFailureGoogle = error => {
    alert("An error occurred.", "Unable to login to your account.", "error");
  };

  const responseGoogle = response => {
    client
      .mutate({
        mutation: GOOGLE_AUTH_MUTATION,
        variables: {
          accessToken: response.accessToken || null,
          idToken: response.idToken || null
        }
      })
      .then(res => {
        const { token, isNewUser, id } = res.data.authGoogle;
        localStorage.setItem(
          "userData",
          JSON.stringify({ token, isNewUser, id })
        );
        alert(
          "Login Successful.",
          "You can now access your dashboard",
          "success"
        );

        if (isNewUser === true) {
          setLoginSuccess("/onboarding");
        } else {
          setLoginSuccess("/");
        }
      })
      .catch(error => {
        console.log(error);
        alert(
          "An error occurred.",
          "Unable to login to your account.",
          "error"
        );
      });
  };

  const signIn = async () => {
    const res = await Plugins.GoogleAuth.signIn();
    console.log(res);
    if (!res.message) {
      responseGoogle(res.authentication);
    } else {
      responseFailureGoogle(res.message);
    }
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
              onBlur={formik.handleBlur}
              touchedName={formik.touched.email}
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
              onBlur={formik.handleBlur}
              touchedName={formik.touched.password}
            />

            <div className="checkbox">
              <Checkbox
                size="md"
                variantColor="orange"
                onChange={() =>
                  formik.setFieldValue("remember", !formik.values.remember)
                }
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
              isLoading={loading}
            >
              Login
            </Button>
            <div className="auth-linked-profiles">
              {/* 
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
            */}
              <Button
                onClick={e => signIn()}
                color="white"
                bg="#4c8bf5"
                rightIcon="arrow-forward"
                width="45%"
                size="lg"
              >
                Login with Google
              </Button>
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

Login.propTypes = {
  client: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
