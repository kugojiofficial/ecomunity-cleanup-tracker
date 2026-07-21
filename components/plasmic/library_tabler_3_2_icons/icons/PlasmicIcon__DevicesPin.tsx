/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DevicesPinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DevicesPinIcon(props: DevicesPinIconProps) {
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
        d={"M13 14V9a1 1 0 011-1h6a1 1 0 011 1v2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 8V5a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1h8m9.121 2.121a3 3 0 10-4.242 0c.418.419 1.125 1.045 2.121 1.879 1.051-.89 1.759-1.516 2.121-1.879zM19 18v.01M16 9h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DevicesPinIcon;
/* prettier-ignore-end */
