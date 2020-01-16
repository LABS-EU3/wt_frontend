import React, { useEffect } from "react";
import CalendarLib from "react-calendar";
import moment from "moment";

const Calendar = ({ setDate }) => {
  useEffect(() => {
    setDate(moment(new Date()).format("YYYY-MM-DD"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = date => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <div>
      <CalendarLib onChange={onChange} value={new Date()} />
    </div>
  );
};

export default Calendar;
