import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useToast, Box, Flex } from "@chakra-ui/core";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import timeGridPlugin from "@fullcalendar/timegrid"; // for timeGrid view
import { ScheduleStyle } from "./ScheduleStyle";

import { GET_SCHEDULE } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";

const ScheduleDetail = ({ client }) => {
  const toast = useToast();
  const [schedule, setSchedule] = useState([]);
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
        const newSchedule = res.data.userSchedule.map(item => {
          item["title"] = item.workoutId.name;
          item["date"] = new Date(item.startDate);
          item[
            "url"
          ] = `https://app.trackdrills.com/workout/${item.workoutId.id}`;
          return item;
        });
        setSchedule(newSchedule);
        setLoading(false);
      })
      .catch(err => {
        alert("An error occurred.", "Unable to load Schedule", "error");
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Box>
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

  if (schedule.length > 0) {
    return (
      <ScheduleStyle>
        <FullCalendar
          defaultView="timeGridWeek"
          plugins={[interactionPlugin, timeGridPlugin]}
          events={schedule}
          selectable={true}
        />
      </ScheduleStyle>
    );
  }

  if (schedule.length === 0) {
    return (
      <Box>
        <Flex
          width="100vw"
          height="100vh"
          justifyContent="center"
          align="center"
        >
          <div>
            <h1>You have no Scheduled Workouts</h1>
          </div>
        </Flex>
      </Box>
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
