import styled from "styled-components";

export const StyledMessagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  height: 100vh;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 1rem;

  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  .users-list {
    width: 25%;
    display: flex;
    flex-wrap: wrap;
  }

  .messages {
    width: 45%;
    display: flex;
    flex-wrap: wrap;
    border-right: 1px solid grey;
    border-left: 1px solid grey;
  }

  .user-detail {
    width: 25%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledMessages = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
