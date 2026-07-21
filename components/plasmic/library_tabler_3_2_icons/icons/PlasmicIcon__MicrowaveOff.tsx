/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MicrowaveOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MicrowaveOffIcon(props: MicrowaveOffIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 18H4a1 1 0 01-1-1V7a1 1 0 011-1h2m4 0h10a1 1 0 011 1v10M15 6v5m0 4v3m3-6h.01M18 9h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.5 10.5c1-.667 1.5-.667 2.5 0 .636.265 1.272.665 1.907.428M6.5 13.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MicrowaveOffIcon;
/* prettier-ignore-end */
