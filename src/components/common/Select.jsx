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
    /* font-family: "Ubuntu", sans-serif; */
    outline: none;
    color: #a3b1c2;
    line-height: 1.3;
    box-sizing: border-box;
    -webkit-appearance: none;
    background-color: #fffcf2;
    background-size: 3em, 100%;
    height: auto;
    /* margin: 2rem auto; */
    padding: 1.3rem;
    border-style: solid;
    /* border-image: initial; */
    border-radius: 0;
    background-repeat: no-repeat, repeat;
    /* background-position: right 0.7em top 50%, 0px 0px; */
    /* border-color: rgb(247, 229, 35); */
    border: 1.5px solid rgba(0, 0, 0, 0.25);
    /* border: 1.5px solid rgba(0, 0, 0, 0.25);
    border-radius: 0;
    padding: 1.7rem;
    color: black;
    background: yellow;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4); */
    /* select.selector {
      color: red;
    } */
    /* option {
      color: black;
      background: rgba(0, 0, 0, 0.3);
      option:not(:checked) {
        background-color: #fff;
      }
    } */
    /* &:focus {
      border-color: #ff8744;
      outline: none;
    } */
  }
  span {
    color: red;
  }
`;

const Select = ({ options, name, onChange, placeholder, error }) => {
  return (
    <CustomStyledSelect>
      <ChakraSelect
        name={name}
        onChange={onChange}
        className="dropdown"
        placeholder={placeholder}
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
        <span>{error}</span>
      </ChakraSelect>
    </CustomStyledSelect>
  );
};

export default Select;

Select.defaultProps = {
  options: []
};
