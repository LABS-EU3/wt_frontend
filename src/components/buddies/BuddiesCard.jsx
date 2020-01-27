import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  useToast,
  Button,
  useDisclosure,
  Text
} from "@chakra-ui/core";

import {
  IoIosPerson,
  IoIosMail,
  IoIosFitness,
  IoIosTrendingUp
} from "react-icons/io";

import logoImage from "../../images/login_image.png";
import CustomButtons from "./CustomButtons";

const BuddiesCard = ({
  clients,
  name,
  goal,
  history,
  text,
  profilePicture,
  icon
}) => {
  return (
    <Box
      boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.12)"
      paddingY="15px"
      margin="30px"
    >
      <Flex alignItems="center" justifyContent="space-between" margin="0 30px">
        <Flex justifyContent="space-around" alignItems="center">
          <Avatar src={profilePicture} size="xl" />
          <Box textAlign="left" marginLeft="30px">
            <Heading size="md">{name}</Heading>
            <Text>{goal}</Text>
          </Box>
        </Flex>
        <CustomButtons icon={icon} text={text} />
      </Flex>
    </Box>
  );
};

export default withApollo(BuddiesCard);
