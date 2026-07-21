/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandMatrixIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandMatrixIcon(props: BrandMatrixIconProps) {
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
          "M4 3H3v18h1m16 0h1V3h-1M7 9v6m5 0v-3.5a2.5 2.5 0 00-5 0v.5m10 3v-3.5a2.5 2.5 0 00-5 0v.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandMatrixIcon;
/* prettier-ignore-end */
