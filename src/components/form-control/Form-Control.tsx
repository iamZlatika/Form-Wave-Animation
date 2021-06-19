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
  }
  input:focus,
  input:valid {
    outline: 0;
    border-bottom: lightblue solid 2px;
  }
`;

interface FormControlProps {
  id: string;
  type: string;
  label: string;
}
const FormControl: React.FC<FormControlProps> = ({ id, type, label }) => {
  return (
    <FormControlStyled key={label}>
      <input id={id} type={type}></input>
      <Label label={label} id={id} />
    </FormControlStyled>
  );
};

export default FormControl;
