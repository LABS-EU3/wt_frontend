import React from "react";
import { Heading, Text, Box } from "@chakra-ui/core";
import PropTypes from "prop-types";

function SideTitle({ heading, subheading, size }) {
  return (
    <Box textAlign="left" marginBottom="60px">
      <Heading size={size}>{heading}</Heading>
      {subheading ? <Text>{subheading}</Text> : null}
    </Box>
  );
}

//adding proptypes
SideTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string
};

export default SideTitle;
