import styled from "styled-components";

export const ExercisesStyle = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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

export const ExerciseCardStyle = styled.div`
  min-height: 100vh;
  width: 70vw;
  margin: 0 auto;
  margin-bottom: 5rem;

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
    opacity: 0.8;
    margin: 1rem 0;

    img {
      width: 100%;
    }
  }

  .exerciseCard-information {
    display: flex;
    justify-content: space-between;

    .exerciseCard-instruction {
      width: 55%;
      text-align: left;

      h3 {
        font-weight: bold;
        font-size: 2vw;
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
    }
  }
`;

export const ExerciseStyle = styled.div`
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid blue;
  margin: 1rem;

  img {
    width: 300px;
    height: 300px;
  }
`;
