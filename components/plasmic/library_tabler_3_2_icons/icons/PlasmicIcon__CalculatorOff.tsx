/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalculatorOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalculatorOffIcon(props: CalculatorOffIconProps) {
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
          "M19.823 19.824A1.999 1.999 0 0118 21H6a2 2 0 01-2-2V5c0-.295.064-.575.178-.827M7 3h11a2 2 0 012 2v11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 10H9a1 1 0 01-1-1V8m3-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-1m-6 4v.01m4-.01v.01M8 17v.01m4-.01v.01m4-.01v.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CalculatorOffIcon;
/* prettier-ignore-end */
