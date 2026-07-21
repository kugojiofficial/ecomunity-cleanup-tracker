/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Signal3GIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Signal3GIcon(props: Signal3GIconProps) {
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
          "M17 8h-2a2 2 0 00-2 2v4a2 2 0 002 2h2v-4h-1M6 8h2.5A1.5 1.5 0 0110 9.5v1A1.5 1.5 0 018.5 12m0 0H7m1.5 0a1.5 1.5 0 011.5 1.5v1A1.5 1.5 0 018.5 16H6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Signal3GIcon;
/* prettier-ignore-end */
