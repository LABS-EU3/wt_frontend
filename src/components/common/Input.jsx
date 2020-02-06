import React from "react";
import { Input as ChakraInput } from "@chakra-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomStyledInput = styled.div`
  margin: 1rem 0;
  width: 100%;

  input {
    border: 1.5px solid rgba(0, 0, 0, 0.25);
    border-radius: 0;
    padding: 1.7rem;
  }
  span {
    color: red;
  }
`;

function Input({
  id,
  name,
  placeholder,
  variant,
  type,
  onChange,
  value,
  error,
  onBlur,
  touchedName
}) {
  return (
    <CustomStyledInput>
      <ChakraInput
        id={id}
        name={name}
        placeholder={placeholder}
        variant={variant}
        type={type}
        onChange={onChange}
        value={value}
        bg="#FFFCF2"
        _hover="black"
        focusBorderColor="#FF8744"
        errorBorderColor="crimson"
        onBlur={onBlur}
        touchedName
      />
      {touchedName && error ? <span>{error}</span> : null}
    </CustomStyledInput>
  );
}

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.any,
  touchedName: PropTypes.bool,
  onBlur: PropTypes.func
};
