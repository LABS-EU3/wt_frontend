import React from "react";
import {
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  SimpleGrid
} from "@chakra-ui/core";

function DetailList({ heading, text }) {
  return (
    <Box>
      <Stack isInline spacing={16}>
        <Text textAlign="left">{text}</Text>
        <Heading textAlign="left" size="sm">
          {heading}
        </Heading>
      </Stack>
      <Divider width="70%" />
    </Box>
  );
}

export default DetailList;
