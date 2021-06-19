import styled from "@emotion/styled";
import React from "react";

const LabelStyled = styled.label`
  position: absolute;
  top: 15px;
  left: 0;
  span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

interface LabelProps {
  label: string;
  id: string;
}
const Label: React.FC<LabelProps> = ({ label, id }) => {
  return (
    <LabelStyled key={label} htmlFor={id}>
      {label.split("").map((letter, idx) => (
        <span key={letter} style={{ transitionDelay: `${idx * 50}ms` }}>
          {letter}
        </span>
      ))}
    </LabelStyled>
  );
};

export default Label;
