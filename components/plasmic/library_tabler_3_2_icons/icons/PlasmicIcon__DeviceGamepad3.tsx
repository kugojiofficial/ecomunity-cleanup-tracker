/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceGamepad3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceGamepad3Icon(props: DeviceGamepad3IconProps) {
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
          "M10 12L7 9H5a1 1 0 00-1 1v4a1 1 0 001 1h2l3-3zm4 0l3-3h2a1 1 0 011 1v4a1 1 0 01-1 1h-2l-3-3zm-2 2l-3 3v2a1 1 0 001 1h4a1 1 0 001-1v-2l-3-3zm0-4L9 7V5a1 1 0 011-1h4a1 1 0 011 1v2l-3 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceGamepad3Icon;
/* prettier-ignore-end */
