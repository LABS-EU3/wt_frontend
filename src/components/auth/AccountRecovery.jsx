import React, { useState, useEffect } from "react";
import { Button, useToast } from "@chakra-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../common/Input";
import { Link, Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";

import Logo from "../common/Logo";
import AuthStyle from "./AuthStyle";
import Preview from "../common/Preview";
import { ACCOUNT_RECOVERY } from "../../graphql/queries";

const AccountRecovery = ({ client, history }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [successfulRecovery, setSuccessfulRecovery] = useState(false);

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
      email: ""
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required("Please enter your email")
    }),
    onSubmit: value => {
      setLoading(true);
      client
        .mutate({
          mutation: ACCOUNT_RECOVERY,
          variables: {
            email: value.email
          }
        })
        .then(response => {
          console.log(response);
          setLoading(false);

          alert(
            "Login Successful.",
            "Account Recovery Email Sent Successfully",
            "success"
          );
          setSuccessfulRecovery(true);
        })
        .catch(error => {
          setLoading(false);
          console.log(error);
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

  // useEffect(() => {
  //   const isSignedIn = isLoggedIn();
  //   // if user is already logged in, redirect to dashboard
  //   if (isSignedIn === true && loginSuccess === false) {
  //     setIsSignedIn(true);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (loginSuccess) {
  //   history.push(loginSuccess);
  //   window.location.reload();
  // }

  // // if user is already logged in, redirect to dashboard
  // if (isSignedIn === true) {
  //   return <Redirect to="/" />;
  // }

  if (successfulRecovery) {
    return <Redirect to="/login" />;
  }

  return (
    <AuthStyle>
      <div className="auth-container">
        <div className="auth-banner">
          <Preview pageName="Account Recovery" />
        </div>

        <div className="auth-form">
          <div className="logo">
            <Logo />
          </div>

          <form onSubmit={formik.handleSubmit}>
            <h2>Account Recovery</h2>
            <h3>Enter your email to request a password reset</h3>

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

            <Button
              type="submit"
              className="auth-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
              size="lg"
              isLoading={loading}
            >
              Reset Password
            </Button>

            <Link to="/login" className="link-recovery">
              Back to login
            </Link>
          </form>
        </div>
      </div>
    </AuthStyle>
  );
};

export default withApollo(AccountRecovery);
