/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCppIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCppIcon(props: BrandCppIconProps) {
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
          "M18 12h4m-2-2v4m-9-2h4m-2-2v4M9 9a3 3 0 00-3-3h-.5A3.5 3.5 0 002 9.5v5A3.5 3.5 0 005.5 18H6a3 3 0 003-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCppIcon;
/* prettier-ignore-end */
