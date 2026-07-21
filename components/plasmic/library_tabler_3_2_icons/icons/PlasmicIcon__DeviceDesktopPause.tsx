/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceDesktopPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceDesktopPauseIcon(props: DeviceDesktopPauseIconProps) {
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
          "M13 16H4a1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1v8m-4 4v5m4-5v5M7 20h6m-4-4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceDesktopPauseIcon;
/* prettier-ignore-end */
