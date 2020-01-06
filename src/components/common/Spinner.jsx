import React from "react";
import { Spinner, Box } from "@chakra-ui/core";
import PropTypes from "prop-types";

function CustomSpinner({ thickness, size, text }) {
  return (
    <Box>
      <Spinner
        thickness={thickness}
        emptyColor="gray.200"
        color="orange.400"
        size={size}
      />
      {text ? <Box ml={3}>{text}</Box> : null}
    </Box>
  );
}

//adding proptypes
CustomSpinner.propTypes = {
  thicknessProp: PropTypes.string,
  sizeProp: PropTypes.string,
  textProp: PropTypes.string
};

export default CustomSpinner;
