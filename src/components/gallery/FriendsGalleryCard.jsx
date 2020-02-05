import React from "react";
import { Stack, Box, Divider, Heading, Text } from "@chakra-ui/core";
import moment from "moment";

import { FriendsGalleryStyle } from "./StyledGallery";

const FriendsGallery = ({ wGallery }) => {
  const { gallery, firstname, lastname, goal } = wGallery;
  return (
    <FriendsGalleryStyle>
      <Divider borderColor="gray.300" />
      <section>
        <Heading size="sm">
          {firstname} {lastname}
        </Heading>
        <Text>
          Goal: <span>{goal}</span>
        </Text>
      </section>
      <Stack isInline className="stack">
        {gallery.map((gal, indx) => {
          while (indx < 3) {
            return (
              <Box key={gal.id} className="box">
                <img src={gal.picture} alt="user-progress" />
                <Text>{gal.workoutId.name}</Text>
                <Text>
                  {moment(new Date(gal.endDate).toLocaleDateString()).format(
                    "LL"
                  )}
                </Text>
              </Box>
            );
          }
          return null;
        })}
      </Stack>
    </FriendsGalleryStyle>
  );
};
export default FriendsGallery;
