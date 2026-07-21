/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceImacOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceImacOffIcon(props: DeviceImacOffIconProps) {
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
          "M7 3h13a1 1 0 011 1v12c0 .28-.115.532-.3.713M17 17H4a1 1 0 01-1-1V4c0-.276.112-.526.293-.707M3 13h10m4 0h4M8 21h8m-6-4l-.5 4m4.5-4l.5 4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceImacOffIcon;
/* prettier-ignore-end */
