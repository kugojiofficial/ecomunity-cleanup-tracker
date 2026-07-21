/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GardenCartOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GardenCartOffIcon(props: GardenCartOffIconProps) {
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
          "M15.733 15.732a2.499 2.499 0 103.544 3.527M6 8v11a1 1 0 001.806.591L11.5 14.5v.055"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 8h2m4 0h9l-3 6.01m-3.319.693l-4.276-.45a4 4 0 01-3.296-2.493L4.256 4.63A1 1 0 003.328 4H2.005M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GardenCartOffIcon;
/* prettier-ignore-end */
