/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDropsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDropsIcon(props: BrandDropsIconProps) {
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
          "M17.637 7.416a7.907 7.907 0 011.76 8.666A8 8 0 0112 21a8 8 0 01-7.396-4.918 7.907 7.907 0 011.759-8.666L12 2l5.637 5.416z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.466 10.923a3.596 3.596 0 01.77 3.877A3.5 3.5 0 0112 17a3.5 3.5 0 01-3.236-2.2 3.595 3.595 0 01.77-3.877L12 8.5l2.466 2.423z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDropsIcon;
/* prettier-ignore-end */
