import React from "react";
import { Spinner, Box } from "@chakra-ui/core";

function CustomSpinner({ thickness, emptyColor, color, size }) {
  return (
    <Box>
      <Spinner
        thickness={thickness}
        emptyColor={emptyColor}
        color={color}
        size={size}
      />
    </Box>
  );
}

export default CustomSpinner;
