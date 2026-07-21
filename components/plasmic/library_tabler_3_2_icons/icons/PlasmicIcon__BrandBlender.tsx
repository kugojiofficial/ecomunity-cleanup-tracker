/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBlenderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBlenderIcon(props: BrandBlenderIconProps) {
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
          "M9 14c0 1.326.632 2.598 1.757 3.535C11.883 18.473 13.41 19 15 19c1.591 0 3.117-.527 4.243-1.465C20.368 16.598 21 15.326 21 14s-.632-2.598-1.757-3.536C18.117 9.527 16.59 9 15 9c-1.591 0-3.117.527-4.243 1.464C9.632 11.402 9 12.674 9 14z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M14 14a1 1 0 102 0 1 1 0 00-2 0zM3 16l9-6.5M6 9h9m-2-4l5.65 5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBlenderIcon;
/* prettier-ignore-end */
