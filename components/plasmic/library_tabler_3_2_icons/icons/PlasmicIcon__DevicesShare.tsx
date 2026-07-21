/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DevicesShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DevicesShareIcon(props: DevicesShareIconProps) {
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
        d={"M13 15V9a1 1 0 011-1h6a1 1 0 011 1v4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 8V5a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1h9m3 4l5-5m0 4.5V17h-4.5M16 9h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DevicesShareIcon;
/* prettier-ignore-end */
