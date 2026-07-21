/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SatelliteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SatelliteIcon(props: SatelliteIconProps) {
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
          "M3.707 6.293l2.586-2.586a1 1 0 011.414 0l5.586 5.586a1 1 0 010 1.414l-2.586 2.586a1 1 0 01-1.414 0L3.707 7.707a1 1 0 010-1.414z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 10l-3 3 3 3 3-3m1-7l3-3 3 3-3 3m-1 3l1.5 1.5m1 3.5a2.5 2.5 0 002.5-2.5M15 21a6 6 0 006-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SatelliteIcon;
/* prettier-ignore-end */
