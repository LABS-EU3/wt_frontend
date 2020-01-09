import React from "react";
import styled from "styled-components";

import Input from "./Input";

const StyledSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;

  h3 {
    font-weight: bold;
    font-family: "Ubuntu";
    width: 100%;
    display: flex;
    font-size: 1.5rem;
  }
`;

const Search = () => {
  const onChange = () => {};
  return (
    <StyledSearch>
      <h3>Search</h3>
      <Input
        type="text"
        placeholder="Look for a specific excercise"
        id="search"
        name="search"
        variant="filled"
        onChange={onChange}
      />
    </StyledSearch>
  );
};

export default Search;
