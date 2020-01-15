import styled from "styled-components";

export const ScheduleStyle = styled.div`
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
