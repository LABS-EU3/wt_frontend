import styled from "styled-components";

const CompletedWorkoutsGalleryStyle = styled.div`
  width: 95vw;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  padding: 2rem;
`;
const FriendsGalleryStyle = styled.div`
  width: 100%;
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;

    span {
      color: #ff8744;
    }
  }

  .stack {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  .box {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      height: 300px;
      width: 100%;
      border-radius: 10px;
    }

    p:last-child {
      color: #ff8744;
    }

    @media only screen and (max-width: 600px) {
      width: 95%;
      margin-bottom: 20px;
    }
  }
`;

export { CompletedWorkoutsGalleryStyle, FriendsGalleryStyle };
