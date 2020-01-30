import React from "react";
import { withApollo } from "react-apollo";
import { Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const CustomButtons = ({
  icon,
  text,
  variant,
  onClick,
  value,
  id,
  name,
  link
}) => {
  if (link) {
    return (
      <Link to={link}>
        <Button
          leftIcon={icon}
          variantColor="orange"
          variant={variant}
          size="md"
          value={value}
          id={id}
          name={name}
        >
          {text}
        </Button>
      </Link>
    );
  }
  return (
    <Button
      leftIcon={icon}
      variantColor="orange"
      variant={variant}
      size="md"
      onClick={onClick}
      value={value}
      id={id}
      name={name}
    >
      {text}
    </Button>
  );
};

export default withApollo(CustomButtons);
