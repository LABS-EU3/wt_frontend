import styled from "styled-components";

const DashboardStyle = styled.div`
  width: 95vw;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  padding: 2rem;

  .welcome {
    width: 100%;
  }

  .dashboard-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;

    .user-detail {
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      padding: 0.5rem;

      a {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
    }

    .dasboard-detail {
      width: 65%;
      display: flex;
      flex-wrap: wrap;

      .quotes {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        p {
          background: #fffcf2;
          padding: 1.5rem;
          border-radius: 10px;
          transition: all 0.2s ease-in-out;
        }
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

  /* .colorOrange {
    color: orange;
  }

  .alignText {
    text-align: left;
  }

  .pointer {
    cursor: pointer;
    background-color: black;
    color: white;

    &:hover {
      background-color: #8884d8;
      color: black;
    }
  }

  .slide {
    -webkit-animation-name: slide;
    -webkit-animation-duration: 1.5s;
    animation-name: slide;
    animation-duration: 1.5s;
  }

  .mySlides {
    display: none;

    section {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0px;
    }
  }

  > div {
    display: flex;


    a {
      margin-left: 90%;
    }

    > div {
      section {
        margin-bottom: 30px;
      }

      section:first-child {
        p {

          width: 100%;
        }
      }
    }
  } */
`;

export default DashboardStyle;
