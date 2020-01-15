import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

//dependencies for @fullcalendar
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import timeGridPlugin from "@fullcalendar/timegrid"; // for timeGrid view

//chakra-ui dependencies
// import {
//   Flex,
//   Box,
//   Image,
//   Text,
//   Stack,
//   Heading,
//   Accordion,
//   AccordionItem,
//   AccordionHeader,
//   AccordionPanel,
//   AccordionIcon,
//   useToast
// } from "@chakra-ui/core";
// import CustomSpinner from "../common/Spinner";
import { ScheduleStyle } from "./ScheduleStyle";

const Schedule = ({ schedule }) => {
  const { startDate } = schedule;
  console.log(schedule);
  return (
    <div>
      <h1>Schedule Calendar</h1>
      <ScheduleStyle>
        <FullCalendar
          defaultView="timeGridWeek"
          plugins={[interactionPlugin, timeGridPlugin]}
          events={[
            {
              title: "Schdeuled Workout",
              start: new Date(startDate),
              end: "2020-01-14T13:30:00Z",
              allDay: false
            }
          ]}
          selectable={true}
          dateClick={function(info) {
            alert("Current view: " + info.view.type);
            // change the day's background color just for fun
            info.dayEl.style.backgroundColor = "pink";
          }}
        />
      </ScheduleStyle>
    </div>
  );
};

export default Schedule;
