/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartDonutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartDonutIcon(props: ChartDonutIconProps) {
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
          "M10 3.2A9 9 0 1020.8 14a1 1 0 00-1-1H16a4.1 4.1 0 11-5-5V4a.899.899 0 00-1-.8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 3.5A9 9 0 0120.5 9H16a9.005 9.005 0 00-1-1V3.5z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartDonutIcon;
/* prettier-ignore-end */
