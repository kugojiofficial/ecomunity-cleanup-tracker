/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadHorizontalPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceIpadHorizontalPauseIcon(
  props: DeviceIpadHorizontalPauseIconProps
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
          "M13 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v7M9 17h4m4 0v5m4-5v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadHorizontalPauseIcon;
/* prettier-ignore-end */
