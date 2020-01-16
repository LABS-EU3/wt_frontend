import React, { useState } from "react";
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

const Time = () => {
  let [hour, setHour] = useState(1);
  let [minute, setMinute] = useState(0);
  let [zone, setZone] = useState("AM");

  const increaseHour = () => {
    console.log("yyy");
    const newHour = parseInt(hour) + 1;
    console.log(newHour);
    setHour(newHour);
  };

  return (
    <StyledTime>
      <div className="time-content">
        <i className="fas fa-arrow-up" onClick={increaseHour}></i>
        <div>
          <input
            type="number"
            onChange={e => setHour(e.target.value)}
            value={hour}
          />
          <span> :</span>
        </div>

        <i className="fas fa-arrow-down"></i>
      </div>

      <div className="time-content">
        <i className="fas fa-arrow-up"></i>
        <div>
          <input type="number" defaultValue={"00"} />
          <span> :</span>
        </div>

        <i className="fas fa-arrow-down"></i>
      </div>

      <div className="time-content">
        <i className="fas fa-arrow-up"></i>
        <div>
          <input type="text" disabled defaultValue={zone} />
        </div>

        <i className="fas fa-arrow-down"></i>
      </div>
    </StyledTime>
  );
};

export default Time;
