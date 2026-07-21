/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartDots2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartDots2Icon(props: ChartDots2IconProps) {
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
          "M7 15a2 2 0 104 0 2 2 0 00-4 0zm4-10a2 2 0 104 0 2 2 0 00-4 0zm5 7a2 2 0 104 0 2 2 0 00-4 0zm5-9l-6 1.5m-.887 2.15l2.771 3.695M16 12.5l-5 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChartDots2Icon;
/* prettier-ignore-end */
