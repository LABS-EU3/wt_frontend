import { Avatar, Box, Flex, Heading, Text, Divider } from "@chakra-ui/core";
import React from "react";
import { withApollo } from "react-apollo";
import CustomButtons from "./CustomButtons";

const BuddiesCard = ({
  clients,
  name,
  goal,
  history,
  text,
  icon,
  variant,
  onClick,
  profilePicture
}) => {
  return (
    <Box>
      <Divider borderColor="gray.300" />
      <Flex alignItems="center" justifyContent="space-between">
        <Flex justifyContent="space-around" alignItems="center" paddingY="5px">
          <Avatar src={profilePicture} size="xl" />
          <Box textAlign="left" marginLeft="30px">
            <Heading size="md">{name}</Heading>
            <Text>{goal}</Text>
          </Box>
        </Flex>
        <CustomButtons
          icon={icon}
          text={text}
          variant={variant}
          onClick={onClick}
        />
      </Flex>
    </Box>
  );
};

export default withApollo(BuddiesCard);
