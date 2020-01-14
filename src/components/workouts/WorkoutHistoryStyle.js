import styled from "styled-components";

export const HistoryStyle = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6rem;
    width: 100%;

    h2 {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      color: #252422;
    }

    p {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150.19%;

      letter-spacing: 0.02em;

      color: #ccc5b9;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 1rem;
  justify-content: flex-end;

  button {
    margin: 0 0.5rem;
  }
`;

export const ModalContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 150px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
`;

export const WorkoutHistoryCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
`;
