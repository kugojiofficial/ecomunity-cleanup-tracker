/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceDesktopExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceDesktopExclamationIcon(
  props: DeviceDesktopExclamationIconProps
) {
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
          "M15 16H4a1 1 0 01-1-1V5a1 1 0 011-1h16a1 1 0 011 1v7M7 20h8m-6-4v4m6-4v4m4-4v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceDesktopExclamationIcon;
/* prettier-ignore-end */
