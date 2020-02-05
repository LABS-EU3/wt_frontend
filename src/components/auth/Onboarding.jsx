import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { Button, RadioButtonGroup, useToast, Box, Flex } from "@chakra-ui/core";
import Input from "../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";

import Preview from "../common/Preview";
import AuthStyle from "./AuthStyle";
import Select from "../common/Select";
import Logo from "../common/Logo";
import { ONBOARDING } from "../../graphql/mutations";
import { GET_UNITS } from "../../graphql/queries";
import { getUserDetails, userOnboardedSuccessfully } from "../../utils";
import { Redirect } from "react-router-dom";
import CustomSpinner from "../common/Spinner";

const userData = getUserDetails();

const Onboarding = ({ client, history }) => {
  const toast = useToast();
  const [heightUnits, setHeightUnits] = useState([]);
  const [weightUnits, setWeightUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      goal: "",
      equipment: "",
      experience: "",
      heightUnit: "",
      weightUnit: "",
      height: "",
      weight: ""
    },
    validationSchema: yup.object().shape({
      goal: yup.string().required("Please select your workout goal"),
      equipment: yup.string().required("Please select your workout equipment"),
      experience: yup
        .string()
        .required("Please select your workout experience"),
      heightUnit: yup
        .string()
        .required("Please select your workout preferred height unit"),
      weightUnit: yup
        .string()
        .required("Please select your workout preferred weight unit"),
      weight: yup.number().required("Please enter your weight"),
      height: yup.number().required("Please enter your height")
    }),

    onSubmit: value => {
      client
        .mutate({
          mutation: ONBOARDING,
          variables: {
            id: userData.user_id,
            heightUnit: value.heightUnit,
            weightUnit: value.weightUnit,
            goal: value.goal,
            experience: value.experience,
            equipment: JSON.parse(value.equipment),
            weight: value.weight,
            height: value.height
          }
        })
        .then(res => {
          userOnboardedSuccessfully("yes");

          alert(
            "Onboarding Completed.",
            "You can now access your dashboard",
            "success"
          );
          history.push("/");
          window.location.reload();
        })
        .catch(() => {
          console.log("aaa");
          alert(
            "An error occurred...",
            "Unable to complete onboarding. Please try again",
            "error"
          );
        });
    }
  });

  useEffect(() => {
    client
      .query({
        query: GET_UNITS
      })
      .then(res => {
        const weightUnit = res.data.units.filter(
          unit => unit.type === "weight"
        );
        const heightUnit = res.data.units.filter(
          unit => unit.type === "height"
        );
        setHeightUnits(heightUnit);
        setWeightUnits(weightUnit);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        console.log("ab");
        alert(
          "An error occurred....",
          "Unable to complete onboarding. Please reload the page and try again",
          "error"
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userData.isNewUser === false) {
    alert("Onboarding already completed.", "Proceed to workout", "warning");
    return <Redirect to="/" />;
  }

  const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, name, isDisabled, value, onClick, ...rest } = props;
    return (
      <>
        <Button
          ref={ref}
          name={name}
          color={isChecked ? "#ff8744" : "#CCC5B9"}
          borderColor={isChecked ? "#ff8744" : "#CCC5B9"}
          aria-checked={isChecked}
          role="radio"
          isDisabled={isDisabled}
          value={value}
          onClick={onClick}
          {...rest}
        />
      </>
    );
  });

  if (isLoading) {
    return (
      <Box>
        <Flex
          width="100vw"
          height="100vh"
          justifyContent="center"
          align="center"
        >
          <CustomSpinner thickness="6px" size="xl" text="Loading..." />
        </Flex>
      </Box>
    );
  }
  return (
    <AuthStyle>
      <div className="auth-container">
        <div className="auth-banner">
          <Preview pageName="Preferences" />
        </div>

        <div className="auth-form">
          <div className="logo">
            <Logo />
          </div>

          <form onSubmit={formik.handleSubmit}>
            <h2>Preferences</h2>

            <p>What is your height?</p>
            <Input
              name="height"
              error={formik.errors.height}
              value={formik.values.height}
              placeholder="Enter Height"
              onChange={formik.handleChange}
              type="number"
              variant="filled"
              id="height"
              bg="#fffcf2"
              focusBorderColor="#dd6b20"
              onBlur={formik.handleBlur}
              touchedName={formik.touched.height}
            />

            <div className="body-status">
              <p>Which height measurement unit do you prefer?</p>
              <RadioButtonGroup
                name="heightUnit"
                className="btnGroup"
                defaultValue="kilogram"
                onClick={formik.handleChange}
                isInline
                err={formik.errors.heightUnit}
                value={formik.values.heightUnit}
                onBlur={formik.handleBlur}
              >
                {heightUnits.map(heightUnit => (
                  <CustomRadio
                    key={heightUnit.name}
                    className="unitButton"
                    value={heightUnit.id}
                  >
                    {heightUnit.name.charAt(0).toUpperCase() +
                      heightUnit.name.slice(1)}
                  </CustomRadio>
                ))}
              </RadioButtonGroup>
              {formik.touched.heightUnit && formik.errors.heightUnit ? (
                <span>{formik.errors.heightUnit}</span>
              ) : null}

              <p>What is your weight?</p>
              <Input
                name="weight"
                error={formik.errors.weight}
                value={formik.values.weight}
                onChange={formik.handleChange}
                placeholder="Enter Weight"
                variant="filled"
                id="weight"
                type="number"
                bg="#fffcf2"
                focusBorderColor="#dd6b20"
                onBlur={formik.handleBlur}
                touchedName={formik.touched.weight}
              />

              <p>Which weight measurement unit do you prefer?</p>
              <RadioButtonGroup
                name="weightUnit"
                className="btnGroup"
                defaultValue="rad2"
                onClick={formik.handleChange}
                isInline
                value={formik.values.weightUnit}
                error={formik.errors.weightUnit}
                onBlur={formik.handleBlur}
              >
                {weightUnits.map(weightUnit => (
                  <CustomRadio
                    key={weightUnit.name}
                    className="unitButton"
                    value={weightUnit.id}
                  >
                    {weightUnit.name.charAt(0).toUpperCase() +
                      weightUnit.name.slice(1)}
                  </CustomRadio>
                ))}
              </RadioButtonGroup>
              {formik.touched.weightUnit && formik.errors.weightUnit ? (
                <span>{formik.errors.weightUnit}</span>
              ) : null}
            </div>
            <p>What is your fitness goal?</p>
            <Select
              name="goal"
              className="dropdown"
              placeholder="Select a goal"
              options={[
                { value: "Weight Loss", text: "Weight Loss" },
                { value: "Muscle Gain", text: "Muscle Gain" },
                { value: "Athletic", text: "Athletic" },
                { value: "Healthy", text: "Healthy" }
              ]}
              error={formik.errors.goal}
              value={formik.values.goal}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touchedName={formik.touched.goal}
            />

            <p>How experienced are you working out</p>
            <Select
              name="experience"
              placeholder="Select a Level"
              options={[
                { value: "Beginner", text: "Beginner" },
                { value: "Intermediate", text: "Intermediate" },
                { value: "Expert", text: "Expert" }
              ]}
              error={formik.errors.experience}
              value={formik.values.experience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touchedName={formik.touched.experience}
            />

            <p>What workout equipment do you have?</p>
            <Select
              name="equipment"
              className="dropdown"
              placeholder="Select equipment"
              options={[
                { value: "false", text: "None" },
                { value: "true", text: "Gym" }
              ]}
              error={formik.errors.equipment}
              value={formik.values.equipment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touchedName={formik.touched.equipment}
            />

            <Button
              type="submit"
              variantColor="orange"
              rightIcon="arrow-forward"
              className="auth-form-button"
              size="lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </AuthStyle>
  );
};

export default withApollo(Onboarding);

Onboarding.propTypes = {
  client: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
