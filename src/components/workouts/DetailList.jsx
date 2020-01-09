import React from "react";
import {
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  Flex,
  SimpleGrid
} from "@chakra-ui/core";

function DetailList({ value, label }) {
  return (
    <Box>
      <Flex>
        <Text textAlign="left" minWidth="180px">
          {label}
        </Text>
        <Heading textAlign="left" size="sm">
          {value}
        </Heading>
      </Flex>
      <Divider />
    </Box>
  );
}

export default DetailList;
