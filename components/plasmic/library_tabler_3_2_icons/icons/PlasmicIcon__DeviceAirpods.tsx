/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceAirpodsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceAirpodsIcon(props: DeviceAirpodsIconProps) {
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
          "M6 4a4 4 0 014 3.8v10.7a1.5 1.5 0 01-3 0V12H6a4 4 0 01-4-3.8V8a4 4 0 014-4zm12 0a4 4 0 00-4 3.8v10.7a1.5 1.5 0 103 0V12h1a4 4 0 004-3.8V8a4 4 0 00-4-4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceAirpodsIcon;
/* prettier-ignore-end */
