/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartArrowsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartArrowsIcon(props: ChartArrowsIconProps) {
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
        d={"M3 18h14M9 9l3 3-3 3m5 0l3 3-3 3M3 3v18m0-9h9m6-9l3 3-3 3M3 6h18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartArrowsIcon;
/* prettier-ignore-end */
