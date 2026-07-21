/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBinanceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBinanceIcon(props: BrandBinanceIconProps) {
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
          "M6 8l2 2 4-4 4 4 2-2-6-6-6 6zm0 8l2-2 4 4 3.5-3.5 2 2L12 22l-6-6zm14-6l2 2-2 2-2-2 2-2zM4 10l2 2-2 2-2-2 2-2zm8 0l2 2-2 2-2-2 2-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBinanceIcon;
/* prettier-ignore-end */
