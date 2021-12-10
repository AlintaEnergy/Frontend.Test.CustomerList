import React from "react";
import { designVariables } from "../../styles/globalVariables";
import { IconButtonTemplate } from "./IconButtonTemplate";

export const Collapse = (props: {
  width?: string;
  height?: string;
  hoverColor?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}) => {
  const iconSvg = () => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="56"
        y="26"
        width="3"
        height="56"
        rx="1.5"
        transform="rotate(90 56 26)"
        fill={designVariables.palette.light100}
      />
    </svg>
  );
  return <IconButtonTemplate svgImage={iconSvg()} {...props} />;
};
