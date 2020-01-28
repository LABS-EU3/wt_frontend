import { Box } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import { GET_UNITS } from "../../graphql/queries";
import Search from "../common/Search";
import BuddiesCard from "./BuddiesCard";

const AddFriendsTab = ({
  client,
  name,
  goal,
  history,
  text,
  profilePicture
}) => {
  const [buddiesData, setBuddiesData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const toast = useToast();

  useEffect(() => {
    client
      .query({
        query: GET_UNITS
      })
      .then(res => {
        setBuddiesData(res.data.units);
        // setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        // setIsLoading(false);
        alert("An error occurred.", "Unable to load", "error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.12)" paddingY="5px">
      <p>Add Friends</p>
      <Search placeholder="" />
      {buddiesData.map(buddy => (
        <div>
          <BuddiesCard
            name={buddy.name}
            goal={buddy.type}
            icon="add"
            text="Add friend"
          />
        </div>
      ))}
    </Box>
  );
};

export default withApollo(AddFriendsTab);
