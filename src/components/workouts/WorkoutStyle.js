import styled from "styled-components";

export const WorkoutsStyle = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 2rem 0;

  .more {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
`;

export const WorkoutStyle = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: #ff8744;
  }

  @media only screen and (max-width: 1065px) {
    width: 40%;
  }

  @media only screen and (max-width: 800px) {
    width: 45%;
  }

  @media only screen and (max-width: 710px) {
    width: 65%;
  }

  img {
    width: 100%;
    height: 250px;
  }

  .workout-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.5rem;
    margin: 1rem 0;

    h2 {
      margin: 1rem 0;
      width: 100%;
      font-family: "Ubuntu";
    }

    .workout-type {
      p {
        font-family: "Roboto";
        display: flex;
        margin: 0.5rem 0;
        width: 100%;
      }
    }
  }
`;
