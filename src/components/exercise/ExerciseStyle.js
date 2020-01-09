import styled from "styled-components";

export const ExercisesStyle = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 2rem 0;

  .search-container {
    border: 1px solid red;
    width: 70%;
    text-align: left;

    h4 {
      font-weight: bold;
    }

    p {
      color: grey;
      padding: 0.2rem 0;
    }
  }
`;

export const ExerciseDetailStyle = styled.div`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .exerciseCard-header {
    text-align: left;
    padding: 0.5rem 0;
    h2 {
      font-weight: bold;
      font-size: 4vw;
    }
    p {
      color: grey;
    }
  }

  .exerciseCard-banner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* opacity: 0.8; */
    margin: 1rem 0;

    img {
      width: 100%;
    }
  }

  .exerciseCard-information {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;

    .exerciseCard-instruction {
      width: 55%;
      text-align: left;

      h3 {
        font-weight: bold;
        font-size: 1.5rem;
      }

      @media only screen and (max-width: 600px) {
        width: 90%;
      }
    }

    .exerciseCard-data {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      line-height: 3rem;
      .exerciseCard-data-tab {
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
        text-align: left;

        .exerciseCard-data-value {
          font-weight: Bold;
          width: 67%;
        }
      }

      @media only screen and (max-width: 600px) {
        width: 90%;
        margin: 1rem 0;
      }
    }
  }

  .excercise-video {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 1rem 0;
  }
`;

export const ExerciseStyle = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media only screen and (max-width: 1000px) {
    width: 45%;
  }

  @media only screen and (max-width: 800px) {
    width: 75%;
  }

  img {
    width: 100%;
    height: 250px;
  }

  .excersie-detail {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.5rem;
    margin: 1rem 0;

    h4 {
      font-family: "Ubuntu";
    }

    .excercise-ratings {
      i {
        color: #d84727;
        padding: 0 0.3rem;
      }
    }
  }

  .excercise-equipment {
    padding: 0 0.5rem;
    display: flex;
    p {
      background-color: #e5e5e5;
      padding: 0.4rem;
      border-radius: 5px;
      font-size: 0.7rem;
      margin-bottom: 1rem;
      font-family: "Roboto";
    }
  }
`;
