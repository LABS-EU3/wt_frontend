import React from "react";
import { Heading, Text } from "@chakra-ui/core";

function DetailList({ heading, text }) {
  return (
    <div>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </div>
  );
}

export default DetailList;
