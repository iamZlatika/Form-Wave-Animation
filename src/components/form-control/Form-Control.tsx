import React from "react";
import styled from "@emotion/styled";
import Label from "../label/Label";

const FormControlStyled = styled.div`
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
    &:focus,
    &:valid {
      outline: 0;
      border-bottom: lightblue solid 2px;
    }
    &:focus + label span,
    &:valid + label span {
      color: lightblue;
      transform: translateY(-30px);
    }
  }
`;

interface FormControlProps {
  type: string;
  label: string;
  required: boolean;
}
const FormControl: React.FC<FormControlProps> = ({ type, label, required }) => {
  return (
    <FormControlStyled key={type}>
      <input id={type} type={type} required={required}></input>
      <Label label={label} id={type} />
    </FormControlStyled>
  );
};

export default FormControl;
