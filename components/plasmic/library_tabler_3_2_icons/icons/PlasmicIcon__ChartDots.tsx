/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartDotsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartDotsIcon(props: ChartDotsIconProps) {
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
        d={"M3 3v18h18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 9a2 2 0 104 0 2 2 0 00-4 0zm10-2a2 2 0 104 0 2 2 0 00-4 0zm-5 8a2 2 0 104 0 2 2 0 00-4 0zm-1.84-4.38l2.34 2.88m2.588-.172l2.837-4.586"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartDotsIcon;
/* prettier-ignore-end */
