/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArmchairOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArmchairOffIcon(props: ArmchairOffIconProps) {
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
        d={"M17 13a2 2 0 014 0v4m-2 2H5a2 2 0 01-2-2v-4a2 2 0 014 0v2h8.036"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 11V6a3 3 0 01.134-.89m1.987-1.98A3 3 0 018 3h8a3 3 0 013 3v5M6 19v2m12-2v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArmchairOffIcon;
/* prettier-ignore-end */
