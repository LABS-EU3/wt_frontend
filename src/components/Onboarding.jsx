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

function Onboarding() {
  return (
    <Flex justify="center">
      <div>
        <Heading>Awesome Placeholder</Heading>
      </div>
      <Flex flexDirection="column">
        <div>
          <Heading size="lg">Preferences</Heading>
          <p>Which weight measurement unit do you prefer?</p>
          <Button variantColor="orange" variant="outline">
            kilogram
          </Button>
          <Button variantColor="orange" variant="outline">
            pounds
          </Button>
          <p>Which height measurement unit do you prefer?</p>
          <Button variantColor="orange" variant="outline">
            meters
          </Button>
          <Button variantColor="orange" variant="outline">
            inches
          </Button>
          <p>What is your fitness goal?</p>
          <Menu>
            <MenuButton as={Button} rightIcon="chevron-down">
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
            <MenuButton as={Button} rightIcon="chevron-down">
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
            <MenuButton as={Button} rightIcon="chevron-down">
              Select a goal
            </MenuButton>
            <MenuList>
              <MenuItem>None</MenuItem>
              <MenuItem>Some / Home</MenuItem>
              <MenuItem>Gym</MenuItem>
            </MenuList>
          </Menu>
          <div>
            <Button variantColor="orange">Submit</Button>
          </div>
        </div>
      </Flex>
    </Flex>
  );
}

export default Onboarding;
