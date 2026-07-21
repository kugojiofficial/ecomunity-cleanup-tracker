/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GasStationOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GasStationOffIcon(props: GasStationOffIconProps) {
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
          "M15 11a2 2 0 012 2m3 3V9l-3-3M4 20V6c0-.548.22-1.044.577-1.405M8 4h4a2 2 0 012 2v4m0 4v6M3 20h12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18 7v1a1 1 0 001 1h1M4 11h7M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GasStationOffIcon;
/* prettier-ignore-end */
