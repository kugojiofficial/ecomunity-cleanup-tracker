/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartDots3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartDots3Icon(props: ChartDots3IconProps) {
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
          "M3 7a2 2 0 104 0 2 2 0 00-4 0zm11 8a2 2 0 104 0 2 2 0 00-4 0zm1-9a3 3 0 106 0 3 3 0 00-6 0zM3 18a3 3 0 106 0 3 3 0 00-6 0zm6-1l5-1.5m-7.5-7l7.81 5.37M7 7l8-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartDots3Icon;
/* prettier-ignore-end */
