import React from "react";
import { withApollo } from "react-apollo";
import { Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import { StyledCustomButton } from "./BuddiesStyle";

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
      <StyledCustomButton>
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
      </StyledCustomButton>
    );
  }
  return (
    <StyledCustomButton>
      <Button
        leftIcon={icon}
        variantColor="orange"
        variant={variant}
        size="sm"
        onClick={onClick}
        value={value}
        id={id}
        name={name}
      >
        {text}
      </Button>
    </StyledCustomButton>
  );
};

export default withApollo(CustomButtons);
