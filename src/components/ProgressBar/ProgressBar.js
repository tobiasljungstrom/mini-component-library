/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const heights = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <Bar value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: ${(p) => heights[p.size]};
  padding: ${(p) => p.size === "large" && "4px"};
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
  height: 100%;
  border-radius: 4px ${(p) => (p.value === 100 ? "4px 4px" : "0 0")} 4px;
  transition-property: border-radius width;
  transition: 200ms ease;
`;

export default ProgressBar;
