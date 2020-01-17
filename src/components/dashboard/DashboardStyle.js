import styled from "styled-components";

const DashboardStyle = styled.div`
  width: 95vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 2rem;

  .welcome {
    width: 100%;
  }

  .dashboard-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;

    .user-detail {
      width: 30%;
      border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
    }

    .dasboard-detail {
      width: 55%;
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
