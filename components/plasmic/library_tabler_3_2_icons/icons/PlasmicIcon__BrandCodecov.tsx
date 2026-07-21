/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCodecovIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCodecovIcon(props: BrandCodecovIconProps) {
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
          "M9.695 12.985A5.972 5.972 0 006.4 12c-1.257 0-2.436.339-3.4 1a9 9 0 0118 0c-.966-.664-2.14-1-3.4-1a6 6 0 00-5.605 8.144"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCodecovIcon;
/* prettier-ignore-end */
