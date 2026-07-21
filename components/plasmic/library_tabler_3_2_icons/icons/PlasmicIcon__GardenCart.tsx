/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GardenCartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GardenCartIcon(props: GardenCartIconProps) {
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
          "M15 17.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM6 8v11a1 1 0 001.806.591L11.5 14.5v.055"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 8h15l-3.5 7-7.1-.747a4 4 0 01-3.296-2.493L4.251 4.63A1 1 0 003.323 4H2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GardenCartIcon;
/* prettier-ignore-end */
