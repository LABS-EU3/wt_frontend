import styled from "styled-components";

export const HistoryStyle = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 1rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  min-height: 100vh;
  @media only screen and (max-width: 800px) {
    width: 90vw;
  }

  @media only screen and (max-width: 500px) {
    width: 95vw;
  }

  @media only screen and (max-width: 400px) {
    width: 97vw;
  }

  header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;

    h2 {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      color: #252422;
    }

    p {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150.19%;

      letter-spacing: 0.02em;

      color: #ccc5b9;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    justify-content: center;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 1rem;
  justify-content: flex-end;

  button {
    margin: 0 0.5rem;
  }
`;

export const ModalContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 150px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;

  .schedule {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    .calendar {
      width: 55%;

      .react-calendar {
        width: 100%;
      }
    }

    .time {
      width: 40%;
      border: 1px solid #ccc5b9;
    }

    .schedule-content {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: flex-start;
      margin: 1rem 0;
      flex-direction: column;
      padding: 1rem;

      .routine {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 1rem 0;

        p {
          padding-right: 1rem;
        }
      }

      .notification {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        p {
          padding-right: 1rem;
        }

        input {
          border: 1px solid black;
          width: 40px;
          text-align: center;
          margin-right: 1rem;
        }

        select {
        }
      }
    }
  }
`;

export const WorkoutHistoryCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid #ccc5b9;
  flex-direction: column;

  .history {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .history-detail {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: 550px) {
        width: 100%;
        margin: 1rem 0;
      }

      .history-image {
        img {
          width: 100px;
          height: 100px;
        }
      }
      .history-content {
        display: flex;
        flex-wrap: wrap;
        margin: 0 1rem;
        flex-direction: column;

        .workout-name {
          font-family: Roboto;
          font-style: normal;
          font-weight: bolder;
          font-size: 1rem;
          line-height: 14px;
          margin-bottom: 0.5rem;
          color: #252422;
        }
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;

          p {
            color: #403d39;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 0.8rem;
            line-height: 12px;
            margin: 0.5rem 0;
          }
        }
      }
    }

    .history-detail-links {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: 550px) {
        width: 100%;
        margin: 1rem 0;
      }

      .link {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 0.9rem;
        line-height: 0.9rem;
        text-transform: uppercase;
        color: #252422;
        transition: all 1s ease-in-out;

        &:hover {
          font-weight: bolder;
        }
      }

      .social-share {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 1rem 0;
      }
    }
  }
`;
