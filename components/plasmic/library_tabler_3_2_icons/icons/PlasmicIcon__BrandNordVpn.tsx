/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandNordVpnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandNordVpnIcon(props: BrandNordVpnIconProps) {
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
          "M9.992 15l-2.007-3-4.015 8c-2.212-3.061-2.625-7.098-.915-10.463A10.14 10.14 0 0112 4a10.14 10.14 0 018.945 5.537c1.71 3.365 1.297 7.402-.915 10.463l-4.517-8-1.505 1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M14.5 15l-3-6L9 13.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandNordVpnIcon;
/* prettier-ignore-end */
