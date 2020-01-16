import React from "react";
import styled from "styled-components";

const StyledTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: grey;
  min-height: 100px;
`;

const Time = () => {
  return (
    <StyledTime>
      <input type="number" value="0" />
      <input type="number" value="0" />
      <input type="number" value="0" />
    </StyledTime>
  );
};

export default Time;
