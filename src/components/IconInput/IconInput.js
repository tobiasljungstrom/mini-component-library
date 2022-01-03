import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input type="text" placeholder={placeholder} size={size} />
      <Glyph
        id={icon}
        strokeWidth={size === "large" ? 2 : 1}
        size={size === "large" ? 20 : 16}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: ${(p) => p.width}px;
  color: ${COLORS.gray700};
`;

const Glyph = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  border-width: ${(p) => (p.size === "large" ? 2 : 1)}px;

  font-size: ${(p) => (p.size === "large" ? 18 / 16 : 14 / 16)}rem;
  font-weight: 700;
  color: inherit;

  padding-left: 28px;

  &::placeholder {
    font-weight: initial;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
