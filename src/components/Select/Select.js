import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectNative value={value} onChange={onChange}>
        {children}
      </SelectNative>
      <SelectedOptionWrapper>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={2} size={24} />
        </IconWrapper>
      </SelectedOptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  width: max-content;
  white-space: nowrap;
`;

const SelectNative = styled.select`
  position: absolute;
  top: 0;
  left: 12;
  bottom: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  -webkit-appearance: none;
`;

const SelectedOptionWrapper = styled.div`
  background-color: hsla(0, 0%, 50%, 0.15);
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px;
  height: 43px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;

  ${SelectNative}:hover + & {
    color: ${COLORS.black};
  }

  ${SelectNative}:focus + & {
    outline: 5px auto -webkit-foccus-ring-color;
    outline: 5px auto hsla(218, 57%, 53%, 1);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
