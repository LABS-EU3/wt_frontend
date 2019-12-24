import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import GoogleLogin from "react-google-login";
import { Button, useToast } from "@chakra-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "../common/Input";
import banner from "../../assets/banner.png";
import SignUpStyle from "../../styles/SignupStyles";
import { GOOGLE_AUTH_MUTATION, SIGNUP_MUTATION } from "../../graphql/mutations";
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

function SignUp({ client, history }) {
  const toast = useToast();
  // const firstname = useRef();
  // const lastname = useRef();
  // const password = useRef();
  // const email = useRef();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
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
          mutation: SIGNUP_MUTATION,
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
    }
  });

  // function onSubmit(e) {
  //   e.preventDefault();

  //   client
  //     .mutate({
  //       mutation: SIGNUP_MUTATION,
  //       variables: {
  //         firstname: firstname.current.value,
  //         lastname: lastname.current.value,
  //         password: password.current.value,
  //         rePassword: password.current.value,
  //         email: email.current.value
  //       }
  //     })
  //     .then(() => {
  //       toast({
  //         title: "Sign up Successful.",
  //         description: "Login with account details.",
  //         status: "success",
  //         duration: 9000,
  //         isClosable: true
  //       });
  //       history.push("/login");
  //     })
  //     .catch(error => {
  //       toast({
  //         title: "Error Sigin you up",
  //         description: error.graphQLErrors[0].message,
  //         status: "error",
  //         duration: 9000,
  //         isClosable: true
  //       });
  //     });
  // }

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
        const { token, isNewUser } = res.data.authGoogle;
        localStorage.setItem("userData", JSON.stringify({ token, isNewUser }));
        if (isNewUser === true) {
          history.push("/onboarding");
        } else {
          history.push("/");
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
    <SignUpStyle>
      <div className="signup-container">
        <div className="signup-banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="signup-form">
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
            {/* <input
              ref={firstname}
              required
              placeholder="FIRST NAME"
              name="FIRST NAME"
              type="text"
            /> */}
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
            {/* <input
              ref={lastname}
              required
              placeholder="LAST NAME"
              name="LAST NAME"
              type="text"
            /> */}
            {/* <input
              ref={email}
              required
              placeholder="EMAIL"
              name="EMAIL"
              type="email"
            /> */}
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
            {/* <input
              ref={password}
              required
              placeholder="PASSWORD"
              name="PASSWORD"
              type="password"
            /> */}
            <Input
              id="password"
              name="password"
              placeholder="PASSWORD"
              variant="filled"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
              bg="#FFFCF2"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.password}
            />
            {/* <input
              ref={password}
              required
              placeholder="RE-ENTER PASSWORD"
              name=" PASSWORD"
              type="password"
            /> */}
            <Input
              id="confirmpassword"
              name="confirmpassword"
              placeholder="CONFIRM PASSWORD"
              variant="filled"
              type="text"
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
              className="signup-form-button"
              variantColor="orange"
              rightIcon="arrow-forward"
              // onClick={onSubmit}
              size="lg"
            >
              Sign up
            </Button>
            <div className="signup-linked-profiles">
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
    </SignUpStyle>
  );
}

export default withApollo(SignUp);
