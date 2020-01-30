import React, { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  useToast
} from "@chakra-ui/core";
import { withApollo } from "react-apollo";

import CustomButtons from "./CustomButtons";
import { MANAGE_FRIENDS } from "../../graphql/mutations";
import { StyledBuddiesCard } from "./BuddiesStyle";

const BuddiesCard = ({
  client,
  name,
  goal,
  text,
  icon,
  variant,
  value,
  id,
  users,
  link,
  setUsers,
  photo
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const onClick = e => {
    e.persist();
    client
      .mutate({
        mutation: MANAGE_FRIENDS,
        variables: {
          userId: e.target.id,
          task: e.target.value
        }
      })
      .then(res => {
        if (res.data.manageFriends) {
          setIsLoading(isLoading);
          setUsers(users);
          alert(`Buddy request sent to ${e.target.name}`, "", "success");
        } else
          alert(
            `Buddy request already sent to ${e.target.name}`,
            "",
            "warning"
          );
      })
      .catch(error => {
        setIsLoading(false);
        if (error.graphQLErrors && error.graphQLErrors.length > 0) {
          alert("An error occurred.", error.graphQLErrors[0].message, "error");
        } else {
          alert("Unable to send friend request", "", "error");
        }
      });
  };

  return (
    <StyledBuddiesCard>
      <Divider borderColor="gray.300" />
      <div className="budddies-card">
        <Flex justifyContent="space-around" alignItems="center" paddingY="5px">
          <Avatar src={photo} size="lg" />
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
          value={value}
          id={id}
          name={name}
          link={link}
        />
      </div>
    </StyledBuddiesCard>
  );
};

export default withApollo(BuddiesCard);
