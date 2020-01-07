import React from "react";
import { Image, Box, Text } from "@chakra-ui/core";

function WorkoutCard({ name, intensity, type }) {
  return (
    <Box>
      <Image
        src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
        height="250px"
        width="100%"
        maxWidth="300px"
        objectFit="cover"
        bg="gray.100"
        marginBottom="12px"
      />
      <Text>{name}</Text>
      <Text>{intensity}</Text>
      <Text>{type}</Text>
    </Box>
  );
}

export default WorkoutCard;
