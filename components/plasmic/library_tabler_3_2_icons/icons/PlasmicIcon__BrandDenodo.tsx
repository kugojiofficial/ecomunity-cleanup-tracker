/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDenodoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDenodoIcon(props: BrandDenodoIconProps) {
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
          "M11 11h2v2h-2v-2zm-7.366 4.634l1.732-1 1 1.732-1.732 1-1-1.732zM11 19h2v2h-2v-2zm7.634-4.366l1.732 1-1 1.732-1.732-1 1-1.732zm-1-7l1.732-1 1 1.732-1.732 1-1-1.732zM11 3h2v2h-2V3zM3.634 8.366l1-1.732 1.732 1-1 1.732-1.732-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDenodoIcon;
/* prettier-ignore-end */
