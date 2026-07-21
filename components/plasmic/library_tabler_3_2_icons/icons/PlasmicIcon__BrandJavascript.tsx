/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandJavascriptIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandJavascriptIcon(props: BrandJavascriptIconProps) {
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
        d={"M20 4l-2 14.5-6 2-6-2L4 4h16z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.5 8h3v8l-2-1m8-7H14a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h1.423a.5.5 0 01.495.57L15.5 15.5l-2 .5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandJavascriptIcon;
/* prettier-ignore-end */
