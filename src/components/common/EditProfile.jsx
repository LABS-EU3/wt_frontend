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
  Switch,
  FormErrorMessage
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
      email: yup.string().email(),
      height: yup.number().required("Please enter your height"),
      heightUnit: yup.string().required("Please select your height unit"),
      weight: yup.number().required("Please enter your weight"),
      weightUnit: yup.string().required("Please select your weight unit"),
      goal: yup.string().required("Please enter your workout goal"),
      reminderType: yup.string()
    }),

    onSubmit: value => {
      setLoading(true);
      client
        .mutate({
          mutation: UPDATE_USER_DETAILS,
          variables: {
            firstname: value.firstname,
            lastname: value.lastname,
            password: "IsaIsaIsa1#",
            experience: "beginner",
            equipment: data.equipment,
            height: value.height,
            weight: value.weight,
            heightUnit: value.heightUnit,
            weightUnit: value.weightUnit,
            goal: value.goal,
            reminderType: "email"
          }
        })
        .then(res => {
          console.log(res);
          setUpdatedData(res.data.user);
          setLoading(false);
          onClose();
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
            isInvalid={formik.errors.lastname}
          />
          {formik.errors.firstname && (
            <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
          )}
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
            isInvalid={formik.errors.lastname}
          />
          {formik.errors.lastname && (
            <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
          )}
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
            isInvalid={formik.errors.email}
          />
          {formik.errors.email && (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          )}
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
              isInvalid={formik.errors.height}
            />
            {formik.errors.height && (
              <FormErrorMessage>{formik.errors.height}</FormErrorMessage>
            )}
          </Box>

          <Box>
            <Select
              marginLeft="30px"
              marginTop="30px"
              name="heightUnit"
              onChange={formik.handleChange}
              value={formik.values.heightUnit}
              isInvalid={formik.errors.heightUnit}
            >
              <option value="inches">Inches ""</option>
              <option value="meters">Meters m</option>
            </Select>
            {formik.errors.heightUnit && (
              <FormErrorMessage>{formik.errors.heightUnit}</FormErrorMessage>
            )}
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
              isInvalid={formik.errors.weight}
            />
            {formik.errors.weight && (
              <FormErrorMessage>{formik.errors.weight}</FormErrorMessage>
            )}
          </Box>

          <Box>
            <Select
              name="weightUnit"
              marginLeft="30px"
              marginTop="30px"
              onChange={formik.handleChange}
              value={formik.values.weightUnit}
              isInvalid={formik.errors.weightUnit}
            >
              <option value="kilogram">Kilogram kg</option>
              <option value="pounds">Pounds lb</option>
            </Select>
            {formik.errors.weightUnit && (
              <FormErrorMessage>{formik.errors.weightUnit}</FormErrorMessage>
            )}
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
            isInvalid={formik.errors.goal}
          />
          {formik.errors.goal && (
            <FormErrorMessage>{formik.errors.goal}</FormErrorMessage>
          )}
        </Box>
        <Flex paddingTop="15px" alignItems="center">
          <FormLabel htmlFor="email-alerts">Enable email alerts?</FormLabel>
          <Switch
            name="reminderType"
            id="email-alerts"
            isChecked={formik.values.reminderType === "email"}
            onChange={event =>
              formik.setFieldValue(
                "reminderType",
                event.target.checked ? "email" : "none"
              )
            }
          />
        </Flex>
        <ModalFooter>
          <Button type="submit" variantColor="orange" mr={3}>
            Save
          </Button>
          <Button variant="ghost" variantColor="orange" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Box>
  );
};

export default withApollo(EditProfile);
