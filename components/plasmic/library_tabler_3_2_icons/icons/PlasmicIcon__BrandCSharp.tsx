/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCSharpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCSharpIcon(props: BrandCSharpIconProps) {
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
          "M10 9a3 3 0 00-3-3h-.5A3.5 3.5 0 003 9.5v5A3.5 3.5 0 006.5 18H7a3 3 0 003-3m6-8l-1 10m5-10l-1 10m-5-7h7.5m-.5 4h-7.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCSharpIcon;
/* prettier-ignore-end */
