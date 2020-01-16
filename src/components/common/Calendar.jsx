import React from "react";
import CalendarLib from "react-calendar";

const Calendar = () => {
  const onChange = date => console.log(date);

  return (
    <div>
      <CalendarLib onChange={onChange} value={new Date()} />
    </div>
  );
};

export default Calendar;
