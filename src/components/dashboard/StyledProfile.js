import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 95vw;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  padding: 2rem;

  @media only screen and (max-width: 400px) {
    padding: 0.5rem;
  }
  .welcome {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    h2 {
      font-size: 1.8rem;

      @media only screen and (max-width: 800px) {
        font-size: 1.5rem;
      }
    }
  }

  .dashboard-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    @media only screen and (max-width: 1085px) {
      flex-direction: column;
      align-items: center;
    }

    .user-detail {
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      padding: 0.5rem;
      border: 2px solid grey;
      position: relative;

      @media only screen and (max-width: 1085px) {
        width: 70%;
        margin: 1rem 0;
      }
      @media only screen and (max-width: 900px) {
        width: 100%;
        margin: 1rem 0;
      }

      svg {
        color: black;
        font-weight: bolder;
      }

      .title {
        font-weight: bolder;
        font-family: Ubuntu;
      }

      .content {
        font-family: Roboto;
      }

      a {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      /* .user-detail-item {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          flex-direction: column;

      } */
    }

    .dasboard-detail {
      width: 65%;
      display: flex;
      flex-wrap: wrap;

      @media only screen and (max-width: 1085px) {
        width: 90%;
      }

      @media only screen and (max-width: 900px) {
        width: 100%;
        margin: 1rem 0;
      }

      .goal {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        p {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          color: #ff8744;
          font-family: Ubuntu;
          font-style: normal;
          font-weight: normal;
        }

        h4 {
          width: 100%;
          padding-left: 7rem;
          font-family: Ubuntu;
          font-style: normal;
          font-weight: normal;
          margin: 0.5rem 0;
          font-size: 2rem;
        }
      }

      .recomended-workouts {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        p {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          color: #ff8744;
          font-family: Ubuntu;
          margin: 1rem 0;
        }
      }
    }
  }

  .profile-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;

    .quotes {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .goal {
      width: 100%;
      height: 335px;
      overflow: hidden;

      @media screen and (max-width: 700px) {
        height: 300px;
      }
    }
  }

  .workout-history {
    width: 95%;
    height: 250px;
    max-height: 280px;
    overflow: hidden;
    margin: 1rem auto;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    overflow: scroll;

    @media screen and (max-width: 700px) {
      margin: auto;
      margin-top: 0;
      min-height: 200px;
      max-height: 245px;
    }

    .workout-history-content {
      width: 100%;
      display: flex;
      padding: 1rem 2rem;
      justify-content: space-between;

      @media screen and (max-width: 700px) {
        padding: 0.8rem 0.5rem;
      }
    }
  }

  #profile-workout-history-name {
    p {
      color: black;
      width: 70%;
      text-align: left;
    }

    .link {
      color: #ff8744;
      width: 100%;
    }

    a {
      width: 25%;

      @media screen and (max-width: 700px) {
        width: 30%;
      }
    }
  }
`;
