import React from "react";
import {
  Flex,
  Box,
  Image,
  Stack,
  Heading,
  Button,
  Input,
  Text,
  Checkbox
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import loginImage from "../assets/login_image.png";
import { LOGIN_MUTATION } from "../graphql/mutations";

function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
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
      value
        .then(res => {
          localStorage.setItem("token", res.data.token);
          props.history.push("/app");
        })
        .catch();
    }
  });

  return (
    <Flex>
      <Image
        src={loginImage}
        display={{ base: "none", md: "block" }}
        width="100%"
        // height="700px"
        height="100vh"
        maxWidth="600px"
        objectFit="cover"
      />

      <Box paddingX="80px">
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
            <Checkbox size="md" variantColor="orange">
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
            <Stack direction="row">
              <Button
                type="submit"
                variantColor="blue"
                rightIcon="arrow-forward"
                size="lg"
                flex="1"
              >
                Login with Google
              </Button>
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

export default Login;
