/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGoogleAnalyticsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGoogleAnalyticsIcon(props: BrandGoogleAnalyticsIconProps) {
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
          "M10 10.105A1.106 1.106 0 0111.105 9h1.79A1.105 1.105 0 0114 10.105v9.79A1.105 1.105 0 0112.895 21h-1.79A1.105 1.105 0 0110 19.895v-9.79zm7-6A1.105 1.105 0 0118.105 3h1.79A1.105 1.105 0 0121 4.105v15.79A1.105 1.105 0 0119.895 21h-1.79A1.105 1.105 0 0117 19.895V4.105zM3 19a2 2 0 104 0 2 2 0 00-4 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGoogleAnalyticsIcon;
/* prettier-ignore-end */
