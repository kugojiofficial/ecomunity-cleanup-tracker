/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnalyzeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnalyzeOffIcon(props: AnalyzeOffIconProps) {
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
          "M20 11a8.1 8.1 0 00-6.986-6.918 8.086 8.086 0 00-4.31.62M6.321 6.31A8.089 8.089 0 004.995 8M4 13a8.1 8.1 0 0013.687 4.676M20 16a1 1 0 00-1-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 8a1 1 0 102 0 1 1 0 00-2 0zm5.888 1.87a3 3 0 104.233 4.252m.595-3.397A3.012 3.012 0 0013.29 9.29M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AnalyzeOffIcon;
/* prettier-ignore-end */
