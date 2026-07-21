/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapDiscountIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapDiscountIcon(props: MapDiscountIconProps) {
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
          "M13 19l-4-2-6 3V7l6-3 6 3 6-3v8.5M9 4v13m6-10v5.5m1 8.5l5-5m0 5v.01M16 16v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MapDiscountIcon;
/* prettier-ignore-end */
