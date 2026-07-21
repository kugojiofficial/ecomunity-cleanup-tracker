/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceImacExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceImacExclamationIcon(
  props: DeviceImacExclamationIconProps
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
          "M15 17H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v8.5M3 13h13m-8 8h7m-5-4l-.5 4m4.5-4l.5 4m4.5-5v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceImacExclamationIcon;
/* prettier-ignore-end */
