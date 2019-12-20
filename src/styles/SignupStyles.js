import styled from "styled-components";

const SignUpStyle = styled.div`
  width: 100%;
  height: 100vh;
  color: black;
  background-color: white;

  .signup-container {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .signup-banner {
    width: 50%;
    opacity: 0.8;

    @media only screen and (max-width: 800px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .signup-form {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0 4rem;

    @media only screen and (max-width: 900px) {
      width: 100%;
      text-align: centre;
    }

    form {
      height: auto;
      width: 100%;
      text-align: left;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media only screen and (max-width: 900px) {
        height: 100%;
        align-items: center;
      }

      a {
        font-size: 16px;
        margin-top: 1rem;
        color: #d84727;
      }

      a:hover {
        color: grey;
      }

      input {
        display: block;
        margin-top: 1rem;
        width: 80%;
        background-color: cream;
        padding: 1rem 0;

        @media only screen and (max-width: 800px) {
          margin: 2rem 0;
        }
      }

      input[type="text"],
      input[type="email"],
      input[type="password"] {
        background-color: #fffdd0;
      }

      h2 {
        font-family: ubuntu;
        font-weight: bold;
        margin-bottom: 2rem;
        font-size: 1.875rem;
      }

      .signup-form-button {
        width: 80%;
        margin: 1rem 0;
      }

      .signup-linked-button {
        width: 45%;
        margin: 1rem 1rem 0 0;
      }

      .signup-linked-profiles {
        width: 80%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export default SignUpStyle;
