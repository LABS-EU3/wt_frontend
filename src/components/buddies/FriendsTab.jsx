import React, { useEffect, useState } from "react";
import { Box, Flex, useToast } from "@chakra-ui/core";
import { withApollo } from "react-apollo";
import { Redirect } from "react-router-dom";
import { GET_FRIENDS } from "../../graphql/queries";
import Search from "../common/Search";
import CustomSpinner from "../common/Spinner";
import BuddiesCard from "./BuddiesCard";

const FriendsTab = ({ client, name, goal, history, text, profilePicture }) => {
  const [friendsData, setFriendsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  useEffect(() => {
    client
      .query({
        query: GET_FRIENDS,
        variables: {
          search,
          fields: ["firstname", "lastname", "email"]
        }
      })
      .then(res => {
        console.log(res);
        debugger;
        setFriendsData(res.data.friends);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        debugger;
        setIsLoading(false);
        alert("An error occurred.", "Unable to load friends", "error");
        setError(true);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  if (isLoading) {
    return (
      <Box
        boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.12)"
        paddingY="15px"
        margin="30px"
      >
        <Flex
          width="100vw"
          height="100vh"
          justifyContent="center"
          align="center"
        >
          <CustomSpinner thickness="6px" size="xl" text="Loading..." />
        </Flex>
      </Box>
    );
  }

  if (error) {
    alert("An error occurred.", "Unable to show friends list", "error");
    return <Redirect to="/" />;
  }

  return (
    <Box boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.12)" paddingY="5px">
      <p>Friends</p>
      <Search
        placeholder="Find friends"
        setSearch={setSearch}
        search={search}
      />
      {friendsData.map(buddy => (
        <div>
          <BuddiesCard
            name={`${buddy.firstname} ${!buddy.lastname ? "" : buddy.lastname}`}
            goal={buddy.goal}
            icon="chat"
            text="Message"
            variant="outline"
            onClick={() => {}}
          />
        </div>
      ))}
    </Box>
  );
};

export default withApollo(FriendsTab);
