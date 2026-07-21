/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceAirtagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceAirtagIcon(props: DeviceAirtagIconProps) {
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
          "M4 12a8 8 0 1016 0 8 8 0 00-16 0zm5 3v.01m6-.01a6 6 0 00-6-6m3 6a3 3 0 00-3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceAirtagIcon;
/* prettier-ignore-end */
