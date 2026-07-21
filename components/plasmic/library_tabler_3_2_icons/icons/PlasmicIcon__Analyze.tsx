/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnalyzeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnalyzeIcon(props: AnalyzeIconProps) {
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
          "M20 11a8.1 8.1 0 00-6.986-6.918A8.095 8.095 0 004.995 8M4 13a8.1 8.1 0 0015 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 16a1 1 0 102 0 1 1 0 00-2 0zM4 8a1 1 0 102 0 1 1 0 00-2 0zm5 4a3 3 0 106 0 3 3 0 00-6 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AnalyzeIcon;
/* prettier-ignore-end */
