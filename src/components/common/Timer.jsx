import React from "react";
import styled from "styled-components";

const StyledTimer = styled.p`
  font-size: 36px;
  line-height: 64px;
  padding-bottom: 5px;
  color: #1a202c;
`;

function Timer({ time }) {
  const renderTime = () => {
    const seconds = String(time % 60).padStart(2, "0");
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return <StyledTimer>{renderTime()}</StyledTimer>;
}

export default Timer;
