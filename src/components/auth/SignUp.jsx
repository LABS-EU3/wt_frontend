import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";
import GoogleLogin from "react-google-login";
import { Button, useToast } from "@chakra-ui/core";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";

import { isLoggedIn } from "../../utils";
import Input from "../common/Input";
import Logo from "../common/Logo";
import Preview from "../common/Preview";
import AuthStyle from "./AuthStyle";
import { GOOGLE_AUTH_MUTATION, SIGNUP_MUTATION } from "../../graphql/mutations";
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

function SignUp({ client, history }) {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();

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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    validationSchema: yup.object().shape({
      firstname: yup.string().required("Please enter your First name"),
      lastname: yup.string().required("Please enter your Last name"),
      email: yup
        .string()
        .email()
        .required("Please enter your email"),
      password: yup
        .string()
        .required("Please enter your password")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
        ),
      confirmpassword: yup
        .string()
        .required("Please confirm your password")
        .when("password", {
          is: val => (val && val.length > 0 ? true : false),
          then: yup
            .string()
            .oneOf(
              [yup.ref("password")],
              "Needs to be the same as password value"
            )
        })
    }),

    onSubmit: value => {
      setLoading(true);
      client
        .mutate({
          mutation: SIGNUP_MUTATION,
          variables: {
            firstname: value.firstname,
            lastname: value.lastname,
            password: value.password,
            rePassword: value.confirmpassword,
            email: value.email
          }
        })
        .then(() => {
          alert(
            "Sign up Successful.",
            "Login with account details.",
            "success"
          );
          setLoading(false);
          history.push("/login");
        })
        .catch(error => {
          setLoading(false);
          alert("Error Sigin you up", error.graphQLErrors[0].message, "error");
        });
    }
  });

  if (signupSuccess) {
    history.push(signupSuccess);
    window.location.reload();
  }

  // if user is already logged in, redirect to dashboard
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return <Redirect to="/" />;
  }

  const responseFailureGoogle = error => {
    alert("An error occurred.", "Unable to signup your account.", "error");
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
        const { token, isNewUser } = res.data.authGoogle;
        localStorage.setItem("userData", JSON.stringify({ token, isNewUser }));
        if (isNewUser === true) {
          setSignupSuccess("/onboarding");
        } else {
          setSignupSuccess("/");
        }

        alert(
          "Sign up Successful.",
          "We've created your account for you.",
          "success"
        );
      })
      .catch(() => {
        alert("An error occurred.", "Unable to signup your account.", "error");
      });
  };

  return (
    <AuthStyle>
      <div className="auth-container">
        <div className="auth-banner">
          <Preview pageName="Sign up" />
        </div>
        <div className="auth-form">
          <div className="logo">
            <Logo />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <h2>Sign up</h2>
            <Input
              id="firstname"
              name="firstname"
              placeholder="FIRSTNAME"
              variant="filled"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstname}
              bg="#FFFCF2"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.firstname}
            />

            <Input
              id="lastname"
              name="lastname"
              placeholder="LASTNAME"
              variant="filled"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              bg="#FFFCF2"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.lastname}
            />

            <Input
              id="email"
              name="email"
              placeholder="EMAIL"
              variant="filled"
              type="email"
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

            <Input
              id="confirmpassword"
              name="confirmpassword"
              placeholder="CONFIRM PASSWORD"
              variant="filled"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
              bg="#FFFCF2"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.confirmpassword}
            />

            <Button
              type="submit"
              className="auth-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
              size="lg"
              isLoading={loading}
            >
              Sign up
            </Button>
            <div className="auth-linked-profiles">
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    color="white"
                    bg="#4C8BF5"
                    rightIcon="arrow-forward"
                    width="45%"
                    size="lg"
                  >
                    Sign Up with Google
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
                rightIcon="arrow-forward"
                size="lg"
                width="45%"
              >
                Facebook
              </Button>
            </div>
            <Link to="/login">Already have an account?</Link>
          </form>
        </div>
      </div>
    </AuthStyle>
  );
}

export default withApollo(SignUp);

SignUp.propTypes = {
  client: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
