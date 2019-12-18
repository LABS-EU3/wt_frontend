import React from "react";
import { Flex } from "@chakra-ui/core";
import { Heading } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
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
            <Menu>
              <MenuButton
                className="dropdown"
                as={Button}
                rightIcon="chevron-down"
              >
                Select a goal
              </MenuButton>
              <MenuList>
                <MenuItem>Weight Loss</MenuItem>
                <MenuItem>Muscle Gain</MenuItem>
                <MenuItem>Athletic</MenuItem>
                <MenuItem>Healthy</MenuItem>
              </MenuList>
            </Menu>
            <p>How experienced are you working out</p>
            <Menu>
              <MenuButton
                className="dropdown"
                as={Button}
                rightIcon="chevron-down"
              >
                Select a goal
              </MenuButton>
              <MenuList>
                <MenuItem>Beginner</MenuItem>
                <MenuItem>Intermediate</MenuItem>
                <MenuItem>Expert</MenuItem>
              </MenuList>
            </Menu>
            <p>What workout equipment do you have?</p>
            <Menu>
              <MenuButton
                className="dropdown"
                as={Button}
                rightIcon="chevron-down"
              >
                Select a goal
              </MenuButton>
              <MenuList>
                <MenuItem>None</MenuItem>
                <MenuItem>Some / Home</MenuItem>
                <MenuItem>Gym</MenuItem>
              </MenuList>
            </Menu>
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
    margin: auto;
    width: 50vw;
    div {
      margin: 0 auto;
      .btnGroup {
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
      }
      .dropdown,
      .submit {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 15px;
      }
    }
  }
  .section-left {
    width: 50vw;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

export default Onboarding;
