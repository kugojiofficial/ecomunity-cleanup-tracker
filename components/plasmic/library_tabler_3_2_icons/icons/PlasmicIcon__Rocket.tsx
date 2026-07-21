/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RocketIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RocketIcon(props: RocketIconProps) {
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
          "M4 13a8 8 0 017 7 6 6 0 003-5 9 9 0 006-8 3 3 0 00-3-3 9 9 0 00-8 6 6 6 0 00-5 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7 14a6 6 0 00-3 6 6 6 0 006-3m4-8a1 1 0 102 0 1 1 0 00-2 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RocketIcon;
/* prettier-ignore-end */
