/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTidalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTidalIcon(props: BrandTidalIconProps) {
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
          "M8.667 9.25L5.333 6 2 9.25l3.333 3.25 3.334-3.25zm0 0L12 6l3.333 3.25m-6.666 0L12 12.5m3.333-3.25L18.667 6 22 9.25l-3.333 3.25-3.334-3.25zm0 0L12 12.5m0 0l3.333 3.25L12 19l-3.333-3.25L12 12.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTidalIcon;
/* prettier-ignore-end */
