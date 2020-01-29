import { Avatar, Box, Flex, Heading, Text, Divider } from "@chakra-ui/core";
import React, { useState } from "react";
import { withApollo } from "react-apollo";
import CustomButtons from "./CustomButtons";
import { MANAGE_FRIENDS } from "../../graphql/mutations";

const BuddiesCard = ({
  client,
  name,
  goal,
  history,
  text,
  icon,
  variant,
  profilePicture,
  value,
  id
}) => {
  const [buddiesAction, setBuddiesAction] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClick = e => {
    console.log(e.target.id);
    client
      .mutate({
        mutation: MANAGE_FRIENDS,
        variables: {
          userId: e.target.id,
          task: e.target.value
        }
      })
      .then(res => {
        debugger;
        setIsLoading(false);
        setBuddiesAction(buddiesAction);
        e.target.value === "add"
          ? alert(`Buddy request sent to ${e.target.id.firstname}`)
          : alert(`An error occured`);
      })
      .catch(error => {
        debugger;
        setIsLoading(false);
        if (error.graphQLErrors && error.graphQLErrors.length > 0) {
          alert("An error occurred.", error.graphQLErrors[0].message, "error");
        } else {
          alert("Unable to send friend request", "", "error");
        }
      });
  };

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
          value={value}
          id={id}
        />
      </Flex>
    </Box>
  );
};

export default withApollo(BuddiesCard);
