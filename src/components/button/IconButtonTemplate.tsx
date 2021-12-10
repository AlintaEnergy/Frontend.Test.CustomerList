import React from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";

export const IconButtonTemplate = (props: {
  width?: string;
  height?: string;
  hoverColor?: string;
  svgImage: JSX.Element;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}) => {
  const { onClick, ...rest } = props;
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Wrapper onClick={handleClick} {...rest}>
      {props.svgImage}
    </Wrapper>
  );
};

const Wrapper = styled.button<{
  width?: string;
  height?: string;
  hoverColor?: string;
  className?: string;
}>`
  ${(props) =>
    props.width && {
      width: `calc(${props.width} + 1rem)`,
      height: `calc(${props.height} + 1rem)`,
    }}
  position: relative;
  transition: ${designVariables.transition};
  cursor: pointer;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${designVariables.palette.light100};
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};
  }
  &:hover {
    border-radius: 50rem;
    background: ${(props) =>
      props.hoverColor ? props.hoverColor : "transparent"};
  }
  ${(props) => props.className}
`;
