/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceSim2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceSim2Icon(props: DeviceSim2IconProps) {
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
        d={"M10 9h3a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 00-1 1v2a1 1 0 001 1h3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceSim2Icon;
/* prettier-ignore-end */
