/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeerIcon(props: DeerIconProps) {
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
          "M3 3c0 2 1 3 4 3 2 0 3 1 3 3m11-6c0 2-1 3-4 3-2 0-3 .333-3 3m-2 9c-1 0-4-3-4-6 0-2 1.333-3 4-3s4 1 4 3c0 3-3 6-4 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.185 14.889l.095-.18a4 4 0 11-6.56 0M17 3c0 1.333-.333 2.333-1 3M7 3c0 1.333.333 2.333 1 3M7 6c-2.667.667-4.333 1.667-5 3m15-3c2.667.667 4.333 1.667 5 3M8.5 10L7 9m8.5 1L17 9m-5 6h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeerIcon;
/* prettier-ignore-end */
