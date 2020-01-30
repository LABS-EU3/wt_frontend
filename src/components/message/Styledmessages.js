import styled from "styled-components";

export const StyledMessagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  height: 100vh;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 1rem 1rem 0 1rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);

  .selected {
    border: 1px solid red;
    cursor: pointer;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  }

  .users-list {
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    .friend {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 8px;
      padding: 0.5rem;
      transition: all 0.4s ease-in-out;

      &:hover {
        /* border: 1px solid red; */
        cursor: pointer;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
      }

      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      .friend-dtl {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        p {
          font-weight: bolder;
        }

        span {
        }
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
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .message-detail {
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;
        height: 95vh;
      }

      .user-detail {
        width: 30%;
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid grey;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        h3 {
          font-weight: bolder;
          margin-top: 1rem;
          font-family: "Ubuntu", sans-serif;
        }

        p {
        }
      }
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
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: bolder;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
  }
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
    /* justify-content: space-around; */
    margin: 1rem 0;
    align-items: center;
    bottom: 0;

    form {
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      input {
        width: 70%;
        padding: 1rem;
        border: 2px solid #ccc5b9;
        outline: none;
        border-radius: 10px;
        background: rgba(232, 232, 232, 0.25);
        color: #ff8744;

        &:focus {
          outline: none;
        }
      }

      button {
        outline: none;
        i {
          transform: rotate(45deg);
          color: #ff8744;
        }
      }
    }
  }
`;
