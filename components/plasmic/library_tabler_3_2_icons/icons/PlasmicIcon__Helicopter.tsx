/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelicopterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelicopterIcon(props: HelicopterIconProps) {
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
          "M3 10l1 2h6m2-3a2 2 0 00-2 2v3c0 1.1.9 2 2 2h7a2 2 0 002-2c0-3.31-3.13-5-7-5h-2zm1 0V6M5 6h15"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 9.1V13h5.5M15 19v-3m4 3h-8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HelicopterIcon;
/* prettier-ignore-end */
