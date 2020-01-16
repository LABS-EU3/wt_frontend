import styled from "styled-components";

const DashboardStyle = styled.div`
  margin: 0 auto;
  padding: 20px;

  .colorOrange {
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
    /* justify-content: space-between; */

    a {
      margin-left: 90%;
    }

    > div {
      section {
        margin-bottom: 30px;
      }

      section:first-child {
        p {
          /* margin-left: 20%; */
          width: 100%;
        }
      }
    }
  }
`;

export default DashboardStyle;
