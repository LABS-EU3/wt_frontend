import React from "react";
import { Select as ChakraSelect } from "@chakra-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";
const CustomStyledSelect = styled.div`
  margin: 1rem 0;
  width: 100%;

  select {
    display: block;
    font-size: 16px;
    outline: none;
    color: #a3b1c2;
    line-height: 1.3;
    box-sizing: border-box;
    -webkit-appearance: none;
    background-color: #fffcf2;
    background-size: 3em, 100%;
    height: auto;
    padding: 1.3rem;
    border-style: solid;
    border-radius: 0;
    background-repeat: no-repeat, repeat;
    border: 1.5px solid rgba(0, 0, 0, 0.25);
  }
  span {
    color: red;
  }
`;

const Select = ({ options, name, onChange, placeholder, error, value }) => {
  return (
    <CustomStyledSelect>
      <ChakraSelect
        name={name}
        onChange={onChange}
        className="dropdown"
        placeholder={placeholder}
        value={value}
        bg="#FFFCF2"
        _hover="black"
        focusBorderColor="#FF8744"
        errorBorderColor="crimson"
      >
        {options.map(option => (
          <option key={option.text} value={option.value}>
            {option.text}
          </option>
        ))}
      </ChakraSelect>
      <span>{error}</span>
    </CustomStyledSelect>
  );
};

export default Select;

Select.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string
};

Select.defaultProps = {
  options: []
};
