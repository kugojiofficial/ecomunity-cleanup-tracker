/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceWatchSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceWatchSearchIcon(props: DeviceWatchSearchIconProps) {
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
          "M11 18H9a3 3 0 01-3-3V9a3 3 0 013-3h6a3 3 0 013 3v2m-3 7a3 3 0 106 0 3 3 0 00-6 0zm5.2 2.2L22 22M9 18v3h3M9 6V3h6v3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceWatchSearchIcon;
/* prettier-ignore-end */
