/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GrillForkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GrillForkIcon(props: GrillForkIconProps) {
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
          "M5 5l11.5 11.5m2.847.075l1.08 1.079a1.96 1.96 0 01-2.773 2.772l-1.08-1.079a1.96 1.96 0 012.773-2.772zM3 7l3.05 3.15a2.9 2.9 0 004.1-4.1L7 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GrillForkIcon;
/* prettier-ignore-end */
