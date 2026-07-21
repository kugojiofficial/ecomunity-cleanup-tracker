/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceDesktopOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceDesktopOffIcon(props: DeviceDesktopOffIconProps) {
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
          "M8 4h12a1 1 0 011 1v10a1 1 0 01-1 1m-4 0H4a1 1 0 01-1-1V5a1 1 0 011-1m3 16h10m-8-4v4m6-4v4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceDesktopOffIcon;
/* prettier-ignore-end */
