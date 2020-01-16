import React, { useEffect, useState } from "react";
import CalendarLib from "react-calendar";
import moment from "moment";

const Calendar = ({ setDate }) => {
  const [date, setCalendarDate] = useState(new Date());

  useEffect(() => {
    setDate(moment(new Date()).format("YYYY-MM-DD"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = date => {
    setCalendarDate(date);
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <div>
      <CalendarLib onChange={onChange} value={date} />
    </div>
  );
};

export default Calendar;
