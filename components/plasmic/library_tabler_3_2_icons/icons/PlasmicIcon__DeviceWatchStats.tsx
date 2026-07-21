/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceWatchStatsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceWatchStatsIcon(props: DeviceWatchStatsIconProps) {
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
          "M6 9a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H9a3 3 0 01-3-3V9zm3 9v3h6v-3M9 6V3h6v3m-6 8v-4m3 4v-1m3 1v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceWatchStatsIcon;
/* prettier-ignore-end */
