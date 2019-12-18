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
  Checkbox,
  ButtonGroup
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { withFormik, Field, Form, useFormik } from "formik";
import * as yup from "yup";
import loginImage from "../assets/login_image.png";

function Login(props) {
  const { errors, touched, isSubmitting } = props;

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
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values);
      //   props.login(values, props.history);
      //   resetForm();
      //   setSubmitting(false);
    }
  });

  return (
    <Flex>
      <Image src={loginImage} display={{ base: "none", md: "block" }} />

      <Box paddingX="80px">
        <Heading paddingTop="80px" paddingBottom="20px">
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
              //   minWidth="500px"
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
              type="text"
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
