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
    flex-direction: column;

    .friend {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      padding: 0.5rem;
      transition: all 0.4s ease-in-out;

      &:hover {
        border: 1px solid red;
        cursor: pointer;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
      }

      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      p {
        padding-left: 1rem;
      }
    }
  }

  .messages-container {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-left: 1px solid grey;

    .messages {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
    }
    .user-detail {
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      border-left: 1px solid grey;
    }
  }
`;

export const StyledMessages = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const StyledMessageDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;

  .friend-message {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    padding: 1rem;
    /* p {
      width: 100%;
      padding: 0;
      margin: 0;
    } */
  }
`;
