import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Select,
  Flex,
  Button,
  ModalFooter,
  Avatar,
  Stack,
  Heading,
  FormLabel,
  Switch
} from "@chakra-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { UPDATE_USER_DETAILS } from "../../graphql/mutations";

import logoImage from "../../images/login_image.png";
import { withApollo } from "react-apollo";

const EditProfile = ({ onClose, data, client }) => {
  const [loading, setLoading] = useState(false);
  const [updatedData, setUpdatedData] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      height: data.height,
      heightUnit: data.heightUnit.id,
      weight: data.weight,
      weightUnit: data.weightUnit.id,
      goal: data.goal,
      reminderType: data.reminderType
    },
    validationSchema: yup.object().shape({
      firstname: yup.string().required("Please enter your firstname"),
      lastname: yup.string().required("Please enter your lastname"),
      height: yup.number().required("Please enter your height"),
      heightUnit: yup.string().required("Please select your height unit"),
      weight: yup.number().required("Please enter your weight"),
      weightUnit: yup.string().required("Please select your weight unit"),
      goal: yup.string().required("Please enter your workout goal")
    }),

    onSubmit: value => {
      setLoading(true);
      client
        .mutate({
          mutation: UPDATE_USER_DETAILS,
          variables: {
            firstname: value.firstname,
            lastname: value.lastname,
            height: value.height,
            weight: value.weight,
            heightUnit: value.heightUnit,
            weightUnit: value.weightUnit,
            goal: value.goal,
            reminderType: value.reminderType
          }
        })

        .then(res => {
          console.log(res);
          setUpdatedData(res.data.user);
          setLoading(false);
          onClose();
        })
        .catch(err => {
          setLoading(false);
          alert("An error occurred.", "Unable to update", "error");
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
  return (
    <Box>
      <Stack>
        <Avatar
          src={logoImage}
          size="2xl"
          marginLeft="35%"
          marginBottom="20px"
        />
        <Button variant="outline" variantColor="orange">
          Edit Profile Picture
        </Button>
      </Stack>
      <form onSubmit={formik.handleSubmit}>
        <Box paddingTop="30px">
          <Heading size="sm">First Name</Heading>
          <Input
            id="firstname"
            name="firstname"
            placeholder="FIRSTNAME"
            type="text"
            variant="flushed"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            _hover="black"
            focusBorderColor="#FF8744"
            errorBorderColor="crimson"
            error={formik.errors.firstname}
          />
        </Box>
        <Box paddingTop="30px">
          <Heading size="sm">Last Name</Heading>
          <Input
            id="lastname"
            name="lastname"
            placeholder="LASTNAME"
            type="text"
            variant="flushed"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            _hover="black"
            focusBorderColor="#FF8744"
            errorBorderColor="crimson"
            error={formik.errors.lastname}
          />
        </Box>
        <Box paddingTop="30px">
          <Heading size="sm">Email</Heading>
          <Input
            id="email"
            name="email"
            placeholder="EMAIL"
            type="email"
            isDisabled={true}
            variant="flushed"
            onChange={formik.handleChange}
            value={formik.values.email}
            _hover="black"
            focusBorderColor="#FF8744"
            errorBorderColor="crimson"
            error={formik.errors.email}
          />
        </Box>

        <Flex paddingTop="15px" alignItems="center">
          <Box paddingTop="30px">
            <Heading size="sm">Height</Heading>
            <Input
              id="height"
              name="height"
              placeholder="HEIGHT"
              type="number"
              variant="flushed"
              onChange={formik.handleChange}
              value={formik.values.height}
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.height}
            />
          </Box>

          <Box>
            <Select marginLeft="30px" marginTop="30px">
              <option value="inches">Inches ""</option>
              <option value="meters">Meters m</option>
            </Select>
          </Box>
        </Flex>
        <Flex paddingTop="15px" alignItems="center">
          <Box paddingTop="30px">
            <Heading size="sm">Weight</Heading>
            <Input
              id="weight"
              name="weight"
              placeholder="WEIGHT"
              type="number"
              variant="flushed"
              onChange={formik.handleChange}
              value={formik.values.weight}
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.weight}
            />
          </Box>

          <Box>
            <Select marginLeft="30px" marginTop="30px">
              <option value="kilogram">Kilogram kg</option>
              <option value="pounds">Pounds lb</option>
            </Select>
          </Box>
        </Flex>
        <Box paddingTop="15px">
          <Heading size="sm">Goal</Heading>
          <Input
            id="goal"
            name="goal"
            placeholder="WORKOUT GOAL"
            type="string"
            variant="flushed"
            onChange={formik.handleChange}
            value={formik.values.goal}
            _hover="black"
            focusBorderColor="#FF8744"
            errorBorderColor="crimson"
            error={formik.errors.goal}
          />
        </Box>
        <Flex paddingTop="15px" alignItems="center">
          <FormLabel htmlFor="email-alerts">Enable email alerts?</FormLabel>
          <Switch id="email-alerts" />
        </Flex>
      </form>
      <ModalFooter>
        <Button variantColor="orange" mr={3}>
          Save
        </Button>
        <Button variant="ghost" variantColor="orange" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Box>
  );
};

export default withApollo(EditProfile);
