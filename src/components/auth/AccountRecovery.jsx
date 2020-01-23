import React, { useState } from "react";
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
import { RESET_PASSWORD } from "../../graphql/mutations";

const AccountRecovery = ({ client, match }) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [successfulRecovery, setSuccessfulRecovery] = useState(false);
  const token = match.params.token;

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

          alert("Account Recovery Email Sent Successfully", "✅", "success");
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

  const formikReset = useFormik({
    initialValues: {
      password: "",
      confirmpassword: ""
    },
    validationSchema: yup.object().shape({
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
          mutation: RESET_PASSWORD,
          variables: {
            password: value.password,
            rePassword: value.confirmpassword
          }
        })
        .then(response => {
          setLoading(false);

          alert("Password Changed Successfully.", "🔐", "success");
          setSuccessfulRecovery(true);
        })
        .catch(error => {
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

  // useEffect(() => {
  //   if (match.params.token) {
  //     console.log(match.params.token);

  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  if (successfulRecovery) {
    return <Redirect to="/login" />;
  }

  if (token) {
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

            <form onSubmit={formikReset.handleSubmit}>
              <h2>Account Recovery</h2>
              <h3>Enter your new password</h3>

              <Input
                id="password"
                name="password"
                placeholder="PASSWORD"
                variant="filled"
                type="password"
                onChange={formikReset.handleChange}
                value={formikReset.values.password}
                bg="#FFFCF2"
                _hover="black"
                focusBorderColor="#FF8744"
                errorBorderColor="crimson"
                error={formikReset.errors.password}
                onBlur={formikReset.handleBlur}
                touchedName={formikReset.touched.password}
              />

              <Input
                id="confirmpassword"
                name="confirmpassword"
                placeholder="CONFIRM PASSWORD"
                variant="filled"
                type="password"
                onChange={formikReset.handleChange}
                value={formikReset.values.confirmpassword}
                bg="#FFFCF2"
                _hover="black"
                focusBorderColor="#FF8744"
                errorBorderColor="crimson"
                error={formikReset.errors.confirmpassword}
                onBlur={formikReset.handleBlur}
                touchedName={formikReset.touched.confirmpassword}
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

              <Link to="/login">Back to login</Link>
            </form>
          </div>
        </div>
      </AuthStyle>
    );
  } else {
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

              <Link to="/login">Back to login</Link>
            </form>
          </div>
        </div>
      </AuthStyle>
    );
  }
};

export default withApollo(AccountRecovery);
