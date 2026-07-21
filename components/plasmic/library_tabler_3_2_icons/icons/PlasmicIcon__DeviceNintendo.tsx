/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceNintendoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceNintendoIcon(props: DeviceNintendoIconProps) {
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
          "M10 20V4H7a4 4 0 00-4 4v8a4 4 0 004 4h3zm4 0V4h3a4 4 0 014 4v8a4 4 0 01-4 4h-3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.5 16.5a1 1 0 100-2 1 1 0 000 2zm-11-7a1 1 0 100-2 1 1 0 000 2z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceNintendoIcon;
/* prettier-ignore-end */
