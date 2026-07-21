/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SleighIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SleighIcon(props: SleighIconProps) {
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
          "M3 19h15a4 4 0 004-4m-6 0H7a4 4 0 01-4-4V5l1.243 1.243A6 6 0 008.485 8H12v2a2 2 0 002 2h.5a1.5 1.5 0 001.5-1.5 1.5 1.5 0 113 0V12a3 3 0 01-3 3zm-1 0v4m-8-4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SleighIcon;
/* prettier-ignore-end */
