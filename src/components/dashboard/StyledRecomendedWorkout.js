import styled from "styled-components";

const StyledRecomendedWorkout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;

  .recomended-workout-detail {
    display: flex;
    flex-wrap: wrap;
<<<<<<< HEAD
    width: 32%;
    margin: 1rem 0;
    @media only screen and (max-width: 1200px) {
      width: 45%;
    }

    @media only screen and (max-width: 750px) {
      width: 65%;
    }

    @media only screen and (max-width: 600px) {
      width: 75%;
    }

    @media only screen and (max-width: 500px) {
      width: 95%;
    }
    img {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      height: 200px;
=======
    width: 25%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 10px;

    img {
      height: 100%;
>>>>>>> 2ce13601a70daf7a0b362d20f2d16aa0d0a9da02
      width: 100%;
      border-radius: 10px;
    }
  }
`;

export default StyledRecomendedWorkout;
