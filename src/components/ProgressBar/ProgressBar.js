/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
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
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(
      `Unknown sized passed to the progressBar component : ${size}`
    );
  }

  const cornersRadius = value < 99.6 ? "4px 0 0 4px" : "4px";
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        "--borderRadius": styles.borderRadius,
        "--padding": styles.padding,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressBarProgress
        style={{
          "--value": value + "%",
          "--height": styles.height,
          "--borderRadius": cornersRadius,
        }}
      />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  /* trim off corners when progress bar is near-full */
  overflow: hidden;
`;

const ProgressBarProgress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--value);
  height: var(--height);
  border-radius: var(--borderRadius);
`;

export default ProgressBar;
