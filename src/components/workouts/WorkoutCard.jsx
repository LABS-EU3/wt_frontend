import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Image, Box, Text, Heading, Flex } from "@chakra-ui/core";

function WorkoutCard({ data }) {
  const { name, intensity, type, id } = data;
  return (
    <Link to={`/workout/${id}`}>
      <Box margin="0 auto">
        <Image
          src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
          height="250px"
          width="100%"
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
    </Link>
  );
}

//adding proptypes
WorkoutCard.propTypes = {
  name: PropTypes.string.isRequired,
  intensity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default WorkoutCard;
