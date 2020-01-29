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
  overflow: scroll;
  height: 95vh;
`;

export const StyledMessageDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;

  h3 {
    width: 100%;
    color: #ff8744;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bolder;
    font-family: "Ubuntu", sans-serif;
  }
  .mssg {
    background: #e2e8f0;
    border-radius: 5px;
    padding: 0.5rem;

    .time {
      color: #ff8744;
      font-size: 0.9rem;
    }
  }

  .friend-message {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .friend-message-detail {
      display: flex;
      flex-wrap: wrap;

      align-items: flex-start;
      flex-direction: column;
      padding: 1rem;
    }
  }

  .my-message {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-end;
    flex-direction: column;
    padding: 1rem;
  }

  .new-message {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
