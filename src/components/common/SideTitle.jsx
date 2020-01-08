import React from "react";
import { Heading, Text } from "@chakra-ui/core";

function SideTitle({ heading, subheading }) {
  return (
    <div>
      <Heading size="lg">{heading}</Heading>
      <Text>{subheading}</Text>
    </div>
  );
}

export default SideTitle;
