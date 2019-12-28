import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { Button, RadioButtonGroup, useToast } from "@chakra-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import Preview from "./common/Preview";
import AuthStyle from "./auth/AuthStyle";
import Select from "./common/Select";
import Logo from "./common/Logo";
import { ONBOARDING } from "../graphql/mutations";
import { GET_UNITS } from "../graphql/queries";
import { getUserDetails, userOnboardedSuccessfully } from "../utils";
import { Redirect } from "react-router-dom";

const userData = getUserDetails();

const Onboarding = ({ client, history }) => {
  const toast = useToast();
  const [heightUnits, setHeightUnits] = useState([]);
  const [weightUnits, setWeightUnits] = useState([]);

  const formik = useFormik({
    initialValues: {
      goal: "",
      equipment: "",
      experience: "",
      heightUnit: "",
      weightUnit: ""
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
        .required("Please select your workout preferred weight unit")
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
            equipment: JSON.parse(value.equipment)
          }
        })
        .then(res => {
          userOnboardedSuccessfully();
          toast({
            title: "Onboarding Completed.",
            description: "You can now access your dashboard",
            status: "success",
            duration: 9000,
            isClosable: true
          });
          history.push("/");
        })
        .catch(() => {
          toast({
            title: "An error occurred.",
            description: "Unable to complete onboarding. Please try again",
            status: "error",
            duration: 9000,
            isClosable: true
          });
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
      })
      .catch(() => {
        toast({
          title: "An error occurred.",
          description:
            "Unable to complete onboarding. Please reload the page and try again",
          status: "error",
          duration: 9000,
          isClosable: true
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userData.isNewUser === false) {
    toast({
      title: "Onboarding already completed.",
      description: "Proceed to workout",
      status: "warning",
      duration: 9000,
      isClosable: true
    });
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

            <div className="body-status">
              <p>Which weight measurement unit do you prefer?</p>
              <RadioButtonGroup
                name="heightUnit"
                className="btnGroup"
                defaultValue="kilogram"
                onClick={formik.handleChange}
                isInline
                err={formik.errors.heightUnit}
                value={formik.values.heightUnit}
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
              <span>{formik.errors.heightUnit}</span>

              <p>Which height measurement unit do you prefer?</p>
              <RadioButtonGroup
                name="weightUnit"
                className="btnGroup"
                defaultValue="rad2"
                onClick={formik.handleChange}
                isInline
                value={formik.values.weightUnit}
                error={formik.errors.weightUnit}
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
              <span>{formik.errors.weightUnit}</span>
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
