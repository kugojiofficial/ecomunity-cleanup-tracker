/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceImacCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceImacCheckIcon(props: DeviceImacCheckIconProps) {
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
          "M11.5 17H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v9M3 13h18M8 21h3.5M10 17l-.5 4m5.5-2l2 2 4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceImacCheckIcon;
/* prettier-ignore-end */
