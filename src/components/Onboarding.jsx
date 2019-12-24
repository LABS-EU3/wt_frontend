import React, { useState } from "react";
import { withApollo } from "react-apollo";
import {
  Button,
  // Select,
  RadioButtonGroup,
  useToast
} from "@chakra-ui/core";
import styled from "styled-components";
import Preview from "./common/Preview";
import AuthStyle from "./auth/AuthStyle";
import Select from "./common/Select";

import Logo from "./common/Logo";
import { ONBOARDING } from "../graphql/mutations";
// import { GET_UNIT } from "../graphql/queries";
import { getUserDetails } from "../utils";

const userData = getUserDetails();

const OnboardingStyled = styled.div`
  .section-right {
    margin: auto;
    width: 50vw;
    @media only screen and (max-width: 650px) {
      width: 90%;
    }
    div {
      margin: auto;
      .btnGroup {
        .unitButton {
          border: 2px solid;
          background-color: transparent;
        }
        margin-top: 10px;
        margin-bottom: 15px;
        .unitButton:not(:last-child) {
          margin-right: 20px;
        }
      }
      .heading {
        margin-bottom: 25px;
      }
      p {
        margin-bottom: 10px;
        font-family: Roboto;
      }
      .dropdown,
      .submit {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 15px;
      }
      .submit {
        background-color: #ff8744;
      }
      .dropdown {
        background: #fffcf2;
        border: 1px solid #252422;
        box-sizing: border-box;
      }
      .dropdownOptions {
        width: 30%;
      }
    }
  }
  .section-left {
    @media only screen and (max-width: 650px) {
      display: none;
    }
    width: 50vw;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

const emptyAnswers = {
  heightUnit: "",
  weightUnit: "",
  goal: "",
  experience: "",
  equipment: ""
};

function Onboarding({ client, history }) {
  const toast = useToast();
  const [answers, setAnswers] = useState(emptyAnswers);

  const handleChange = e => {
    setAnswers({
      ...answers,
      [e.target.name]: !(e.target.value === "")
        ? e.target.value
        : e.target.innerText
    });
  };
  console.log(answers);

  const handleSubmit = async e => {
    // try {
    //   e.preventDefault();
    //   const res = await client.query({
    //     query: GET_UNIT
    //   });
    //   console.log(res.data);
    //   debugger;
    // } catch (err) {
    //   console.log(err);
    //   debugger;
    // }
    try {
      console.log(answers.heightUnit);
      e.preventDefault();
      const res = await client.mutate({
        mutation: ONBOARDING,
        variables: {
          id: userData.user_id,
          heightUnit: userData.user_id,
          weightUnit: userData.user_id,
          goal: answers.goal,
          experience: answers.experience,
          equipment: true
        }
      });
      console.log(res.data);
      toast({
        title: "Onboarding complete",
        description: "You can now access your dashboard",
        status: "success",
        duration: 9000,
        isClosable: true
      });
      history.push("/");
    } catch (err) {
      console.log(err);
      toast({
        title: "Unable to complete onboarding",
        description: "Kindly check input and try again.",
        status: "error",
        duration: 9000,
        isClosable: true
      });
    }
  };

  const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, onSubmit, ...rest } = props;
    return (
      <Button
        ref={ref}
        color={isChecked ? "#ff8744" : "#CCC5B9"}
        borderColor={isChecked ? "#ff8744" : "#CCC5B9"}
        aria-checked={isChecked}
        role="radio"
        isDisabled={isDisabled}
        {...rest}
      />
    );
  });

  return (
    <AuthStyle>
      {/* <OnboardingStyled> */}
      <div className="auth-container">
        <div className="auth-banner">
          <Preview pageName="Preferences" />
        </div>

        <div className="auth-form">
          <div className="logo">
            <Logo />
          </div>

          <form>
            <h2>Preferences</h2>

            <div>
              <p>Which weight measurement unit do you prefer?</p>
              <RadioButtonGroup
                name="heightUnit"
                className="btnGroup"
                defaultValue="kilogram"
                onClick={handleChange}
                isInline
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
                onClick={handleChange}
                isInline
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
              onChange={handleChange}
              className="dropdown"
              placeholder="Select a goal"
              options={[
                { value: "Weight Loss", text: "Weight Loss" },
                { value: "Muscle Gain", text: "Muscle Gain" },
                { value: "Athletic", text: "Athletic" },
                { value: "Healthy", text: "Healthy" }
              ]}
            />
            {/* <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Athletic">Athletic</option>
              <option value="Healthy">Healthy</option>
            </Select> */}
            <p>How experienced are you working out</p>
            <Select
              name="experience"
              onChange={handleChange}
              placeholder="Select a Level"
              options={[
                { value: "Beginner", text: "Beginner" },
                { value: "Intermediate", text: "Intermediate" },
                { value: "Expert", text: "Expert" }
              ]}
            />
            {/* <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option> */}
            {/* </Select> */}
            <p>What workout equipment do you have?</p>
            <Select
              name="equipment"
              onChange={handleChange}
              className="dropdown"
              placeholder="Select equipment"
              options={[
                { value: "false", text: "None" },
                { value: "true", text: "Gym" }
              ]}
            />
            {/* <option value="false">None</option>
              <option value="true">Gym</option>
            </Select> */}
            <div>
              <Button
                type="submit"
                variantColor="orange"
                rightIcon="arrow-forward"
                className="auth-form-button"
                size="lg"
              >
                Submit
              </Button>
            </div>
          </form>

          {/* <Flex justify="center">
        <div className="section-left">
          <img src={image} alt="Workout" />
        </div>
        <Flex className="section-right" flexDirection="column">
          
        </Flex>
      </Flex> */}
        </div>
      </div>
      {/* </OnboardingStyled> */}
    </AuthStyle>
  );
}

export default withApollo(Onboarding);
