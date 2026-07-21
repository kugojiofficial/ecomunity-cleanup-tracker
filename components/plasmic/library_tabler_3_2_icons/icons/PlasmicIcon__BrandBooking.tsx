/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBookingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBookingIcon(props: BrandBookingIconProps) {
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
          "M4 18V8.5A4.5 4.5 0 018.5 4h7A4.5 4.5 0 0120 8.5v7a4.501 4.501 0 01-4.5 4.5H6a2 2 0 01-2-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 12h3.5a2 2 0 010 4H8V9a1 1 0 011-1h1.5a2 2 0 010 4H9m7 4h.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBookingIcon;
/* prettier-ignore-end */
