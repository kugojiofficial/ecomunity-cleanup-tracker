/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSymfonyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSymfonyIcon(props: BrandSymfonyIconProps) {
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
          "M6 13c.458.667 1.125 1 2 1 1.313 0 2-.875 2-1.5 0-1.5-2-1-2-2C8 9.875 8.516 9 9.5 9c2.5 0 1.563 2 5.5 2 .667 0 1-.333 1-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 17c-.095.667.238 1 1 1 1.714 0 2.714-2 3-6 .286-4 1.571-6 3-6 .571 0 .905.333 1 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a10 10 0 0110 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSymfonyIcon;
/* prettier-ignore-end */
