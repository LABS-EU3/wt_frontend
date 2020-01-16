import React from "react";
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
  return (
    <StyledTime>
      <div className="time-content">
        <i class="fas fa-arrow-up"></i>
        <div>
          <input type="number" defaultValue="1" />
          <span> :</span>
        </div>

        <i class="fas fa-arrow-down"></i>
      </div>

      <div className="time-content">
        <i class="fas fa-arrow-up"></i>
        <div>
          <input type="number" defaultValue="00" />
          <span> :</span>
        </div>

        <i class="fas fa-arrow-down"></i>
      </div>

      <div className="time-content">
        <i class="fas fa-arrow-up"></i>
        <div>
          <input type="text" disabled defaultValue="AM" />
        </div>

        <i class="fas fa-arrow-down"></i>
      </div>
    </StyledTime>
  );
};

export default Time;
