/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellOffIcon(props: BellOffIconProps) {
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
          "M9.346 5.353c.21-.129.428-.246.654-.353a2 2 0 114 0 7 7 0 014 6v3m-1 3H4a4 4 0 002-3v-3a6.996 6.996 0 011.273-3.707M9 17v1a3 3 0 006 0v-1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BellOffIcon;
/* prettier-ignore-end */
