/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const WRAPPERSIZES = {
  small: {
    height: 8 + "px",
    borderRadius: 4 + "px",
    padding: 0 + "px",
  },

  medium: {
    height: 12 + "px",
    borderRadius: 4 + "px",
    padding: 0 + "px",
  },

  large: {
    height: 24 + "px",
    borderRadius: 8 + "px",
    padding: 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styleSize = WRAPPERSIZES[size];
  const isLargeBarRounded = value < 99.6;
  return (
    <ProgressWrapper
      style={{
        "--borderRadius": styleSize.borderRadius,
        "--padding": styleSize.padding,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressBarProgress
        style={
          !isLargeBarRounded
            ? {
                "--value": value + "%",
                "--height": styleSize.height,
                "--borderRadius": 4 + "px",
              }
            : {
                "--value": value + "%",
                "--height": styleSize.height,
                "--borderRadius": "4px 0 0 4px",
              }
        }
      />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  overflow: hidden;
`;

const ProgressBarProgress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--value);
  height: var(--height);
  border-radius: var(--borderRadius);
`;

export default ProgressBar;
