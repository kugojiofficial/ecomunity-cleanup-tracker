/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceImacPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceImacPauseIcon(props: DeviceImacPauseIconProps) {
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
          "M13 17H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v9M3 13h18M8 21h5m-3-4l-.5 4m7.5-4v5m4-5v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceImacPauseIcon;
/* prettier-ignore-end */
