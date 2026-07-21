/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegoOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegoOffIcon(props: LegoOffIconProps) {
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
        d={"M9.5 11h.01m-.01 4a3.5 3.5 0 005 0"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 4V3h8v2h1a3 3 0 013 3v8m-.884 3.127A2.99 2.99 0 0117 20v1H7v-1a3 3 0 01-3-3V8c0-1.083.574-2.032 1.435-2.56M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LegoOffIcon;
/* prettier-ignore-end */
