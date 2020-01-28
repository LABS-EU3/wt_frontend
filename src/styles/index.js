import styled from "styled-components";

export const StyledMessage = styled.div`
  .rcw-conversation-container {
    .rcw-header {
      background-color: #ff8744;
      font-family: "Roboto", sans-serif;

      .rcw-close-button {
        background-color: inherit;
        display: flex;
        justify-content: flex-end;
        padding-right: 1rem;
        outline: none;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .rcw-messages-container {
      .rcw-client {
        background-color: #ff8744;
        color: white;
        font-family: "Ubuntu", sans-serif;
      }

      .rcw-response {
        font-family: "Ubuntu", sans-serif;
      }
    }
  }
`;
