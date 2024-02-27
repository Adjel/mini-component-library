/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressWrapper>
      <ProgressBarProgress style={{ "--value": value + "%" }} />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  width: 370px;
  height: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px, 0px, 0px, 4px;
`;

const ProgressBarProgress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--value);
  height: 100%;
`;

export default ProgressBar;
