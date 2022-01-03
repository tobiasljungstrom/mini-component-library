import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Input value={value} onChange={onChange}>
        {children}
      </Input>
      <Value>{displayedValue}</Value>
      <Chevron id="chevron-down" strokeWidth={2} size={24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: min-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const Input = styled.select`
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  appearance: none;
  width: 100%;
  font-size: 1rem;
  color: currentColor;
`;

const Value = styled.div`
  white-space: nowrap;
  width: min-content;
  margin-right: 52px;
  margin-left: 20px;
  margin-top: -24px;
  visibility: hidden;
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 10px;
  pointer-events: none;
`;

export default Select;
