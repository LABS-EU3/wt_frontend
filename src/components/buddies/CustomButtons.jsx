import { Button } from "@chakra-ui/core";
import React from "react";
import { withApollo } from "react-apollo";

const CustomButtons = ({ icon, text, variant, onClick, value, id }) => {
  return (
    <Button
      leftIcon={icon}
      variantColor="orange"
      variant={variant}
      size="md"
      onClick={onClick}
      value={value}
      id={id}
    >
      {text}
    </Button>
  );
};

export default withApollo(CustomButtons);
