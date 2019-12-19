import React from "react";
import { useToast } from "@chakra-ui/core";

const Alert = ({ title, description, status }) => {
  const toast = useToast();
  return (
    <div>
      {toast({
        title,
        description,
        status,
        duration: 9000,
        isClosable: true
      })}
    </div>
  );
};

export default Alert;
