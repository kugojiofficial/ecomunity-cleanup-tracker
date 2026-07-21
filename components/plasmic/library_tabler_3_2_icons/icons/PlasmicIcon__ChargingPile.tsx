/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChargingPileIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChargingPileIcon(props: ChargingPileIconProps) {
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
          "M18 7l-1 1m-3 3h1a2 2 0 012 2v3a1.5 1.5 0 103 0V9l-3-3M4 20V6a2 2 0 012-2h6a2 2 0 012 2v14"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 11.5L7.5 14h3L9 16.5M3 20h12M4 8h10"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChargingPileIcon;
/* prettier-ignore-end */
