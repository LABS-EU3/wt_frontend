import React from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../common/Input";
import {
  Flex,
  Box,
  Image,
  Stack,
  Heading,
  Button,
  Text,
  Checkbox,
  useToast
} from "@chakra-ui/core";

import loginImage from "../../assets/login_image.png";
import { GOOGLE_AUTH_MUTATION } from "../../graphql/mutations";
import { LOGIN_QUERY } from "../../graphql/queries";

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

function Login({ client, history }) {
  const toast = useToast();

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
        .min(8, "Must be minimum 8 characters")
        .required("Password is required")
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
    <Flex>
      <Image
        src={loginImage}
        display={{ base: "none", md: "block" }}
        width="100%"
        height="100vh"
        maxWidth="600px"
        objectFit="cover"
      />

      <Box paddingX="80px" height="100vh">
        <Heading paddingTop="100px" paddingBottom="20px" textAlign="left">
          Login
        </Heading>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing="20px">
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
            />
            <span>{formik.errors.email}</span>

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
            />
            <Checkbox
              size="md"
              variantColor="orange"
              onSelect={formik.handleChange}
              value={true}
            >
              Remember me
            </Checkbox>
            <Button
              type="submit"
              variantColor="orange"
              rightIcon="arrow-forward"
              size="lg"
            >
              Login
            </Button>
            <Stack direction="row" spacing={10}>
              <Box>
                <GoogleLogin
                  clientId={REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseFailureGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </Box>
              <Button
                type="submit"
                variantColor="facebook"
                rightIcon="arrow-forward"
                size="lg"
                flex="1"
              >
                Login with Facebook
              </Button>
            </Stack>
            <Link to="/accountrecovery">
              <Text
                marginX="auto"
                marginTop="20px"
                textAlign="left"
                color="#D84727"
              >
                Forgot your password?
              </Text>
            </Link>
            <Link to="/signup">
              <Text
                marginX="auto"
                marginTop="20px"
                textAlign="left"
                color="#403D39"
              >
                Don't have an account? Sign up here!
              </Text>
            </Link>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}

export default withApollo(Login);
