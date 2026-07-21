/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceNintendoOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceNintendoOffIcon(props: DeviceNintendoOffIconProps) {
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
          "M4.713 4.718A4 4 0 003 8v8a4 4 0 004 4h3V10m0-4V4H8m6 6V4h3a4 4 0 014 4v8c0 .308-.035.608-.1.896m-1.62 2.39A3.982 3.982 0 0117 20h-3v-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5.5 8.5a1 1 0 102 0 1 1 0 00-2 0zM3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceNintendoOffIcon;
/* prettier-ignore-end */
