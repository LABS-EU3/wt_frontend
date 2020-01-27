import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import { Flex, Box, Heading, Button, Text } from "@chakra-ui/core";

const CustomButtons = ({ icon, text }) => {
  return (
    <Button leftIcon={icon} variantColor="orange" variant="solid" size="md">
      {text}
    </Button>
  );
};

export default withApollo(CustomButtons);
