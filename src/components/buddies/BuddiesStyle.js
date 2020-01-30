import styled from "styled-components";

export const StyledBuddies = styled.div`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 80vh;

  .tabs {
    width: 100%;
    padding: 1rem;
  }

  .name {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    margin: 1rem 0;
    font-family: "Ubuntu";
    color: #ff8744;
  }
  .tb {
    &:focus {
      box-shadow: 0 0 0 3px #ff8744;
    }
  }
  .tb[aria-selected="true"] {
    color: #ff8744;
    outline: #ff8744;
  }
`;

export const StyledAddFriendsTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
`;

export const StyledBuddiesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .budddies-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 550px) {
      h2 {
        font-size: 1rem;
      }
    }

    @media only screen and (max-width: 450px) {
      flex-direction: column;
    }
  }
`;

export const StyledCustomButton = styled.div`
  @media only screen and (max-width: 450px) {
    margin: 1rem 0;
  }
`;
