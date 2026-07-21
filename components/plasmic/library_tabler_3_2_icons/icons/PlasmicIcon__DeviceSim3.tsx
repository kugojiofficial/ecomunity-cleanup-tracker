/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceSim3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceSim3Icon(props: DeviceSim3IconProps) {
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
        d={"M6 3h8.5L19 7.5V20a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 9h2.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5m0 0H11m1.5 0a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceSim3Icon;
/* prettier-ignore-end */
