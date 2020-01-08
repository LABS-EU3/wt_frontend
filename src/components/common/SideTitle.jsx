import React from "react";
import { Heading, Text, Box } from "@chakra-ui/core";

function SideTitle({ heading, subheading }) {
  return (
    <Box textAlign="left" marginBottom="60px">
      <Heading size="lg">{heading}</Heading>
      {subheading ? <Text>{subheading}</Text> : null}
    </Box>
  );
}

export default SideTitle;
