import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  justify-content: space-evenly;

  .time-content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    i {
      margin: 0.5rem 0;
      color: #ff8744;
      cursor: pointer;
    }

    div {
      input {
        width: 40px;
        border: 1px solid black;
        text-align: center;
        border-radius: 5px;
      }
    }
  }
`;

const Time = ({ setTime }) => {
  let [hour, setHour] = useState("00");
  let [minute, setMinute] = useState("00");
  let [zone, setZone] = useState("AM");

  useEffect(() => {
    const newTime = `${hour}:${minute} ${zone}`;
    setTime(newTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increaseHour = () => {
    let newHour = hour;

    if (parseInt(newHour) >= 12) {
      newHour = "01";
    } else {
      newHour = parseInt(hour) + 1;
    }
    setHour(newHour);
    const newTime = `${newHour}:${minute} ${zone}`;
    setTime(newTime);
  };

  const decreaseHour = () => {
    let newHour = hour;
    if (parseInt(newHour) <= 0) {
      newHour = 12;
    } else {
      newHour = parseInt(hour) - 1;
    }
    setHour(newHour);
    const newTime = `${newHour}:${minute} ${zone}`;
    setTime(newTime);
  };

  const increaseMinute = () => {
    let newMinute = "00";
    if (minute === "00") {
      newMinute = "30";
    } else {
      newMinute = "00";
    }

    setMinute(newMinute);
    const newTime = `${hour}:${newMinute} ${zone}`;
    setTime(newTime);
  };

  const setCurrentZone = () => {
    let newZone = "AM";
    if (zone === "AM") {
      newZone = "PM";
    } else {
      newZone = "AM";
    }

    setZone(newZone);
    const newTime = `${hour}:${minute} ${newZone}`;
    setTime(newTime);
  };

  return (
    <StyledTime>
      <div className="time-content">
        <i className="fas fa-arrow-up" onClick={increaseHour}></i>
        <div>
          <input
            type="number"
            onChange={e => setHour(e.target.value)}
            disabled
            value={hour}
          />
          <span> :</span>
        </div>

        <i className="fas fa-arrow-down" onClick={decreaseHour}></i>
      </div>

      <div className="time-content" onClick={increaseMinute}>
        <i className="fas fa-arrow-up"></i>
        <div>
          <input
            type="number"
            value={minute}
            onChange={e => setMinute(e.target.value)}
            disabled
          />
          <span> :</span>
        </div>

        <i className="fas fa-arrow-down"></i>
      </div>

      <div className="time-content">
        <i className="fas fa-arrow-up" onClick={setCurrentZone}></i>
        <div>
          <input
            type="text"
            disabled
            onChange={e => setZone(e.target.value)}
            value={zone}
          />
        </div>

        <i className="fas fa-arrow-down" onClick={setCurrentZone}></i>
      </div>
    </StyledTime>
  );
};

export default Time;
