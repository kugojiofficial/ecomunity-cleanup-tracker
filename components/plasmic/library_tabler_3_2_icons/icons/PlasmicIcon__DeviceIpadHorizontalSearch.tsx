/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadHorizontalSearchIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function DeviceIpadHorizontalSearchIcon(
  props: DeviceIpadHorizontalSearchIconProps
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
        d={"M11.5 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v5.5M9 17h2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 18a3 3 0 106 0 3 3 0 00-6 0zm5.2 2.2L22 22"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadHorizontalSearchIcon;
/* prettier-ignore-end */
