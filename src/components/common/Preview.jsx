import React from "react";
import banner from "../../assets/banner.jpg";
import styled from "styled-components";
const StyledPreview = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    display: none;
  }
  .content {
    display: flex;
    padding: 3rem 3rem;
    align-items: center;
    h2 {
      color: white;
      text-transform: uppercase;
    }

    i {
      color: white;
      padding-right: 1rem;
    }
  }
`;
const Preview = ({ pageName }) => {
  return (
    <StyledPreview>
      <div
        className="view overlay category-detail"
        style={{
          backgroundImage: `url(${banner})`,
          height: "100%",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="content">
          <i className="fas  fa-2x fa-bars"></i>
          <h2>{pageName}</h2>
        </div>
      </div>
    </StyledPreview>
  );
};
export default Preview;
