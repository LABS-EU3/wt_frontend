import React from "react";
import banner from "../../assets/banner.jpg";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPreview = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    display: none;
  }

  .view {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
        className="view"
        style={{
          backgroundImage: `url(${banner})`
        }}
      >
        <div className="content">
          <h2>{pageName}</h2>
        </div>
      </div>
    </StyledPreview>
  );
};

export default Preview;

Preview.propTypes = {
  pageName: PropTypes.string.isRequired
};
