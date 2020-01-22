import React from "react";
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
const previewData = [
  {
    id: "1",
    preview:
      "https://images.unsplash.com/photo-1576511529803-68e00bdd891a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "2",
    preview:
      "https://images.unsplash.com/photo-1576511420196-44fe62d67910?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    id: "3",
    preview:
      "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=808&q=80"
  },
  {
    id: "4",
    preview:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    preview:
      "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
  }
];

let randomPreview = previewData[Math.floor(Math.random() * previewData.length)];

const Preview = ({ pageName }) => {
  return (
    <StyledPreview>
      <div
        className="view"
        style={{
          backgroundImage: `url(${randomPreview.preview})`
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
