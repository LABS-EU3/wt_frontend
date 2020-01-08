import React from "react";
import { Image, Box, Text, Heading, Flex } from "@chakra-ui/core";

function WorkoutCard({ name, intensity, type }) {
  return (
    <Box margin="0 auto">
      <Image
        src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
        height="250px"
        width="100%"
        // maxWidth="300px"
        objectFit="cover"
        bg="gray.100"
        marginBottom="12px"
      />
      <Heading size="sm" textAlign="left" color="orange.400">
        {name}
      </Heading>
      <Flex marginTop="5px" justifyContent="space-between">
        <Text>Intensity: {intensity}</Text>
        <Text>Type: {type}</Text>
      </Flex>
    </Box>
  );
}

export default WorkoutCard;