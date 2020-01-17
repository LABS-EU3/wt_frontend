import styled from "styled-components";

const StyledRecomendedWorkout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;

  .recomended-workout-detail {
    display: flex;
    flex-wrap: wrap;
    width: 25%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 10px;

    img {
      height: 150px;
      width: 100%;
      border-radius: 10px;
    }
  }
`;

export default StyledRecomendedWorkout;
