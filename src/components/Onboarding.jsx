import React from "react";
import { Flex } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { Select } from "@chakra-ui/core";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption
} from "@chakra-ui/core";
import styled from "styled-components";
import image from "../images/login_image.png";

function Onboarding() {
  return (
    <OnboardingStyled>
      <Flex justify="center">
        <div className="section-left">
          <img src={image} />
        </div>
        <Flex className="section-right" flexDirection="column">
          <div>
            <Heading className="heading" size="lg">
              Preferences
            </Heading>
            <p>Which weight measurement unit do you prefer?</p>
            <div className="btnGroup">
              <Button
                className="unitButton"
                variantColor="orange"
                variant="outline"
              >
                kilogram
              </Button>
              <Button
                className="unitButton"
                variantColor="orange"
                variant="outline"
              >
                pounds
              </Button>
            </div>
            <p>Which height measurement unit do you prefer?</p>
            <div className="btnGroup">
              <Button
                className="unitButton"
                variantColor="orange"
                variant="outline"
              >
                meters
              </Button>
              <Button
                className="unitButton"
                variantColor="orange"
                variant="outline"
              >
                inches
              </Button>
            </div>
            <p>What is your fitness goal?</p>
            <Select className="dropdown" placeholder="Select a goal">
              <option value="option1">Weight Loss</option>
              <option value="option2">Muscle Gain</option>
              <option value="option3">Athletic</option>
              <option value="option3">Healthy</option>
            </Select>
            <p>How experienced are you working out</p>
            <Select className="dropdown" placeholder="Select a level">
              <option value="option1">Beginner</option>
              <option value="option3">Intermediate</option>
              <option value="option3">Expert</option>
            </Select>
            <p>What workout equipment do you have?</p>
            <Select className="dropdown" placeholder="Select equipment">
              <option value="option1">None</option>
              <option value="option3">Some / Home</option>
              <option value="option3">Gym</option>
            </Select>
            <div>
              <Button
                className="submit"
                variantColor="orange"
                rightIcon="arrow-forward"
              >
                Submit
              </Button>
            </div>
          </div>
        </Flex>
      </Flex>
    </OnboardingStyled>
  );
}

const OnboardingStyled = styled.div`
  .section-right {
    margin: 0 auto;
    width: 50vw;

    div {
      margin: 0 auto;
      .btnGroup {
        .unitButton {
          background-color: #fffcf2;
          border: 1px solid #ff8744;
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

export default Onboarding;
