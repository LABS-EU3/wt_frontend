import React from "react";
import { Input as StyledInput } from "@chakra-ui/core";
import styled from "styled-components";

const CustomStyledInput = styled.div`
  margin: 1rem 0;
  width: 100%;

  input {
    border: 1.5px solid rgba(0, 0, 0, 0.25);
    border-radius: 0;
    padding: 2rem;
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
  error
}) {
  return (
    <CustomStyledInput>
      <StyledInput
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
      />
      <span>{error}</span>
    </CustomStyledInput>
  );
}

export default Input;
