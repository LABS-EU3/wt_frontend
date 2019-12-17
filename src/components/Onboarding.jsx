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
      </div>
    </Flex>
  );
}

export default Onboarding;
