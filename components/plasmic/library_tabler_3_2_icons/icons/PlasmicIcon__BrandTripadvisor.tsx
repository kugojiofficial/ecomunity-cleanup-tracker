/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTripadvisorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTripadvisorIcon(props: BrandTripadvisorIconProps) {
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
          "M5 13.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm11 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.5 9a4.5 4.5 0 103.5 1.671L22 9h-4.5zm-11 0A4.5 4.5 0 113 10.671L2 9h4.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10.5 15.5l1.5 2 1.5-2M9 6.75c2-.667 4-.667 6 0"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTripadvisorIcon;
/* prettier-ignore-end */
