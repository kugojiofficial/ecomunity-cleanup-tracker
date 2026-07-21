/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandEvernoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandEvernoteIcon(props: BrandEvernoteIconProps) {
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
        d={"M4 8h5V3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.9 19c.6-2.5 1.1-5.471 1.1-9 0-4.5-2-5-3-5-1.906 0-3-.5-3.5-1-.354-.354-.5-1-1.5-1H9L4 8c0 6 2.5 8 5 8 1 0 1.5-.5 2-1.5s1.414-.326 2.5 0c1.044.313 2.01.255 2.5.5 1 .5 2 1.5 2 3 0 .5 0 3-3 3s-3-3-1-3m1-8h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandEvernoteIcon;
/* prettier-ignore-end */
