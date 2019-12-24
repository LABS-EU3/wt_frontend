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
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .signup-banner {
    width: 40%;
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
      margin-top: 2rem;
      align-items: center;

      @media only screen and (max-width: 900px) {
        margin-top: 0;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
      }

      a {
        font-size: 16px;
        margin-top: 1rem;
        color: #d84727;
      }

      a:hover {
        color: grey;
      }

      /* input {
        display: block;
        margin-top: 1rem;
        width: 80%;
        background-color: cream;
        padding: 1rem 0;

        @media only screen and (max-width: 800px) {
          margin: 2rem 0;
          padding: 0.5rem;
          margin-top: 0;
          border-radius: 5px;
        }
      } */

      /* input[type="text"],
      input[type="email"],
      input[type="password"] {
        background-color: #fffcf2;
      } */

      h2 {
        font-family: ubuntu;
        font-weight: bold;
        margin-bottom: 2rem;
        font-size: 1.875rem;
        text-align: left;
        width: 100%;
        margin-left: 7rem;

        @media only screen and (max-width: 800px) {
          margin-left: 5rem;
          margin-bottom: 1rem;
        }
      }

      .signup-form-button {
        width: 80%;
        margin: 1rem 0;
        @media only screen and (max-width: 800px) {
          padding: 1rem;
        }
      }

      .signup-linked-profiles {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media only screen and (max-width: 800px) {
          flex-direction: column;
        }

        button {
          @media only screen and (max-width: 800px) {
            margin: 1rem 0;
            width: 80%;
          }
        }
      }
    }
  }
`;

export default SignUpStyle;
