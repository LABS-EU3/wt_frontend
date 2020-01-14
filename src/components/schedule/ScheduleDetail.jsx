import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useToast, Box, Flex } from "@chakra-ui/core";

import { ExercisesStyle } from "../exercise/ExerciseStyle";
import { GET_SCHEDULE } from "../../graphql/queries";
import Schedule from "./Schedule";
import CustomSpinner from "../common/Spinner";

const ScheduleDetail = ({ client }) => {
  const toast = useToast();
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    client
      .query({
        query: GET_SCHEDULE
      })
      .then(res => {
        setSchedule(res.data.userSchedule);
        console.log(setSchedule);
        setLoading(false);
      })
      .catch(() => {
        alert("An error occurred.", "Unable to load Schedule", "error");
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <CustomSpinner thickness="6px" size="xl" text="Loading..." />;
  }

  if (schedule.length > 0) {
    return (
      <ExercisesStyle>
        {schedule.map(schedule => (
          <Schedule key={schedule.id} schedule={schedule} />
        ))}
      </ExercisesStyle>
    );
  }
  return (
    <Box>
      <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex>
    </Box>
  );
};

export default withApollo(ScheduleDetail);
