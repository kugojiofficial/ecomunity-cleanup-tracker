/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PigMoneyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PigMoneyIcon(props: PigMoneyIconProps) {
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
        d={"M15 11v.01M5.173 8.378a3 3 0 114.656-1.377"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16 4v3.803A6.019 6.019 0 0118.658 11h1.341a1 1 0 011 1v2a1 1 0 01-1 1h-1.342c-.336.95-.907 1.8-1.658 2.473V19.5a1.5 1.5 0 11-3 0v-.583c-.33.055-.665.083-1 .083h-4c-.335 0-.67-.028-1-.083v.583a1.5 1.5 0 01-3 0v-2.027A6 6 0 018.999 7h2.5l4.5-3H16z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PigMoneyIcon;
/* prettier-ignore-end */
