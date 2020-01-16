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
