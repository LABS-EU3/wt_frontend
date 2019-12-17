import React from "react";
import {
  Flex,
  Box,
  Image,
  Stack,
  Heading,
  Button,
  Input,
  Text
} from "@chakra-ui/core";
import { withFormik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import loginImage from "../assets/login_image.png";

function Login(props) {
  const { errors, touched, isSubmitting } = props;
  return (
    <Flex>
      <Image src={loginImage} />
      <Box paddingX="50px"></Box>
      <Box>
        <Heading paddingTop="60px" paddingBottom="20px">
          Login
        </Heading>

        {/* <Form>
          <Stack spacing="40px">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="checkbox" value="Remember me" /> Remember me<br></br>
            <input type="submit" value="Login" />
          </Stack>
          <input type="submit" value="Login with Google" />
          <input type="submit" value="Login with Facebook" />
        </Form> */}
        <Form>
          <Stack spacing="20px" marginX="auto" maxWidth="350px">
            <Box>
              {errors.email && touched.email && <p>{errors.email}</p>}
              <Field
                name="email"
                render={props => (
                  <Input placeholder="Email" type="text" {...props.field} />
                )}
              />
            </Box>

            <Box>
              {errors.password && touched.password && <p>{errors.password}</p>}
              <Field
                name="password"
                render={props => (
                  <Input
                    placeholder="Password"
                    type="password"
                    {...props.field}
                  />
                )}
              />
            </Box>

            <Button
              isLoading={isSubmitting}
              type="submit"
              size="lg"
              variantColor="cyan"
            >
              Login
            </Button>
          </Stack>

          <Link to="/accountrecovery">
            <Text
              marginX="auto"
              marginTop="20px"
              textAlign="center"
              maxWidth="350px"
            >
              Forgot your password?
            </Text>
          </Link>
          <Link to="/signup">
            <Text
              marginX="auto"
              marginTop="20px"
              textAlign="center"
              maxWidth="350px"
            >
              Don't have an account? Sign up here
            </Text>
          </Link>
        </Form>
      </Box>
    </Flex>
  );
}

export default Login;
