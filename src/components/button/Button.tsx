import styled from "@emotion/styled";
import React from "react";

const ButtonStyled = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  &:focus {
    outline: 0;
  }
  &:active {
    transform: scale(0.98);
  }
`;
const Button = () => {
  return <ButtonStyled>Login</ButtonStyled>;
};

export default Button;
