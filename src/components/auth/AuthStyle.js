import styled from "styled-components";

const AuthStyle = styled.div`
  width: 100%;
  height: 100vh;
  color: black;
  background-color: white;

  .auth-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .auth-banner {
    width: 45%;

    @media only screen and (max-width: 850px) {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .auth-form {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 4rem;

    @media only screen and (max-width: 1300px) {
      width: 54%;
      text-align: center;
    }

    @media only screen and (max-width: 900px) {
      width: 100%;
      text-align: center;
    }

    @media only screen and (max-width: 350px) {
      padding: 0 1rem;
    }

    span {
      color: red;
    }

    .logo {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-top: 2rem;
      @media only screen and (max-width: 900px) {
        justify-content: center;
      }
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
        display: flex;
        width: 100%;
        font-size: 16px;
        margin-top: 1rem;
        color: #d84727;

        a:hover {
          color: grey;
        }
      }

      .link-recovery {
        color: grey;

        a:hover {
          color: #d84727;
        }
      }

      .checkbox {
        display: flex;
        width: 100%;
      }

      p {
        width: 100%;
      }

      h2 {
        font-family: ubuntu;
        font-weight: bold;
        margin-bottom: 2rem;
        font-size: 1.875rem;
        text-align: left;
        width: 100%;

        @media only screen and (max-width: 800px) {
          text-align: center;
          margin-bottom: 1rem;
        }
      }

      h3 {
        font-family: roboto;
        margin-bottom: 2rem;
        font-size: 1.1rem;
        text-align: left;
        width: 100%;

        @media only screen and (max-width: 800px) {
          text-align: center;
          margin-bottom: 1rem;
        }
      }

      .body-status {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: column;
        margin-bottom: 1rem;

        @media only screen and (max-width: 356px) {
          padding: 0;
        }

        p {
          padding: 1rem 0;
        }
      }

      .auth-form-button {
        width: 100%;
        margin: 1rem 0;
        @media only screen and (max-width: 800px) {
          padding: 1rem;
        }
      }

      .auth-linked-profiles {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: 1100px) {
          flex-direction: column;
        }

        @media only screen and (max-width: 900px) {
          flex-direction: row;
        }

        @media only screen and (max-width: 800px) {
          flex-direction: column;
        }

        button {
          border-radius: 10px;
          @media only screen and (max-width: 1300px) {
            font-size: 1rem;
          }

          @media only screen and (max-width: 1100px) {
            margin: 1rem 0;
            width: 100%;
          }

          @media only screen and (max-width: 900px) {
            width: 45%;
          }

          @media only screen and (max-width: 800px) {
            margin: 1rem 0;
            width: 100%;
          }
        }
      }
    }
  }
`;

export default AuthStyle;
