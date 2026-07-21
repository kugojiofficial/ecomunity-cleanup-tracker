/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheeseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheeseIcon(props: CheeseIconProps) {
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
        d={"M4.519 20.008L21 20v-3.5a2 2 0 010-4V9H4.278"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M21 9l-9.385-4.992c-2.512.12-4.758 1.42-6.327 3.425C3.865 9.253 3 11.654 3 14.287c0 2.117.56 4.085 1.519 5.721M15 13v.01M8 13v.01M11 16v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CheeseIcon;
/* prettier-ignore-end */
