import styled from "styled-components";

const StyledCharts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .chart {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .recharts-wrapper {
      width: 100% !important;

      svg {
        width: 100%;
      }
    }
    h4 {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      color: #ff8744;
      font-family: Ubuntu;
      font-style: normal;
      font-weight: normal;
      margin: 1rem 0;
    }

    .chart-nav {
      margin: 1rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      color: #ff8744;

      svg {
        cursor: pointer;
      }
    }
  }
`;

export default StyledCharts;
