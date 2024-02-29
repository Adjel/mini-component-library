import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 14 + "px",
    inputSize: 14 + "px",
    bottomBorderSize: 1 + "px solid black",
  },
  large: {
    iconSize: 20 + "px",
    inputSize: 18 + "px",
    bottomBorderSize: 2 + "px solid black",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden />
      <TextInput
        placeholder={placeholder}
        style={{
          "--bottomBorderSize": styles.bottomBorderSize,
          "--width": width + "px",
          "--paddingLeft": 24 + "px",
          "--inputSize": styles.inputSize,
          "--borderColor": styles.borderColor,
          "--border": styles.border,
        }}
      ></TextInput>
      <IconWrapper style={{ "--iconSize": styles.iconSize }}>
        <Icon id={icon} strokeWidth={2} size={styles.iconSize}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: max-content;
  height: 34px;

  * {
    * {
      :hover {
        color: black;
      }
    }
  }
`;

const TextInput = styled.input`
  position: relative;
  width: var(--width);
  bottom: 0;
  left: 0;
  border: 0px;
  margin: 0px;
  padding-left: var(--paddingLeft);
  border-bottom: var(--bottomBorderSize);
  font-size: var(--inputSize);
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--iconSize);
  height: var(--iconSize);
  margin: 0px, auto;
  padding: 0px, 6px;
  top: 2.5px;
  bottom: 0;
  left: 0;
  color: hsla(0, 0%, 40%, 1);
`;

export default IconInput;
