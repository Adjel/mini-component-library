import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 14 + "px",
    fontSize: 14 + "px",
    bottomBorderSize: 1 + "px solid black",
    height: 24 + "px",
  },
  large: {
    iconSize: 20 + "px",
    fontSize: 18 + "px",
    bottomBorderSize: 2 + "px solid black",
    height: 36 + "px",
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--iconSize": styles.iconSize }}>
        <Icon id={icon} strokeWidth={2} size={styles.iconSize}></Icon>
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height,
          "--bottomBorderSize": styles.bottomBorderSize,
          "--fontSize": styles.fontSize,
          "--paddingLeft": styles.height,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--iconSize);
  margin: auto 0;
  top: 0;
  bottom: 0;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: 0px;
  border-bottom: var(--bottomBorderSize);
  padding-left: var(--paddingLeft);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
