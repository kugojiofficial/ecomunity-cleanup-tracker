/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAndroidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAndroidIcon(props: BrandAndroidIconProps) {
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
          "M4 10v6m16-6v6M7 9h10M7 9v8a1 1 0 001 1h8a1 1 0 001-1V9M7 9a5 5 0 1110 0M8 3l1 2m7-2l-1 2M9 18v3m6-3v3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAndroidIcon;
/* prettier-ignore-end */
