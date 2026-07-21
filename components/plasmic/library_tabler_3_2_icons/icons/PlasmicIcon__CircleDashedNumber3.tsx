/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleDashedNumber3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleDashedNumber3Icon(props: CircleDashedNumber3IconProps) {
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
          "M8.56 3.69a9 9 0 00-2.92 1.95M3.69 8.56A9 9 0 003 12m.69 3.44a9 9 0 001.95 2.92m2.92 1.95A9 9 0 0012 21m3.44-.69a9 9 0 002.92-1.95m1.95-2.92A9 9 0 0021 12m-.69-3.44a9 9 0 00-1.95-2.92m-2.92-1.95A9 9 0 0012 3m-2 5h2.5A1.5 1.5 0 0114 9.5v1a1.5 1.5 0 01-1.5 1.5m0 0H11m1.5 0a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CircleDashedNumber3Icon;
/* prettier-ignore-end */
