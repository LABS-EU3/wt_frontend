import { Button } from "@chakra-ui/core";
import React from "react";
import { withApollo } from "react-apollo";

const CustomButtons = ({ icon, text, variant, onClick }) => {
  return (
    <Button
      leftIcon={icon}
      variantColor="orange"
      variant={variant}
      size="md"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default withApollo(CustomButtons);
