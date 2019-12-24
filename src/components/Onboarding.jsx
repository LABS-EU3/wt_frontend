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
// import { GET_UNIT } from "../graphql/queries";
import { getUserDetails, userOnboardedSuccessfully } from "../utils";
import { Redirect } from "react-router-dom";

const userData = getUserDetails();

const Onboarding = ({ client, history }) => {
  const toast = useToast();
  // const [heightUnits, setLoginSuccess] = useState(false);

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
      console.log(value);
      client
        .mutate({
          mutation: ONBOARDING,
          variables: {
            id: userData.user_id,
            heightUnit: userData.user_id,
            weightUnit: userData.user_id,
            goal: value.goal,
            experience: value.experience,
            equipment: JSON.parse(value.equipment)
          }
        })
        .then(res => {
          console.log(res);
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
    console.log("running");
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
    const {
      isChecked,
      name,
      isDisabled,
      value,
      onClick,
      error,
      ...rest
    } = props;
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
        <span>{error}</span>
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
                <CustomRadio className="unitButton" value="kilogram">
                  kilogram
                </CustomRadio>
                <CustomRadio className="unitButton" value="pounds">
                  pounds
                </CustomRadio>
              </RadioButtonGroup>
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
                <CustomRadio className="unitButton" value="meters">
                  meters
                </CustomRadio>
                <CustomRadio className="unitButton" value="inches">
                  inches
                </CustomRadio>
              </RadioButtonGroup>
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
