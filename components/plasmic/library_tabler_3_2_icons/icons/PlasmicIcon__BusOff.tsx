/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BusOffIcon(props: BusOffIconProps) {
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
        d={"M4 17a2 2 0 104 0 2 2 0 00-4 0zm12.18-.828a2 2 0 002.652 2.648"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M4 17H2V6a1 1 0 011-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M16 5l1.5 7H22M2 10h8m4 0h3M7 7v3m5-5v3M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BusOffIcon;
/* prettier-ignore-end */
