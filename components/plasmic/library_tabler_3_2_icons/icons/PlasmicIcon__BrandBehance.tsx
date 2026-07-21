/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBehanceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBehanceIcon(props: BrandBehanceIconProps) {
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
          "M3 18V6h4.5a3 3 0 110 6 3 3 0 010 6H3zm0-6h4.5m6.5 1h7a3.5 3.5 0 10-7 0zm0 0v2a3.5 3.5 0 006.64 1M16 6h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBehanceIcon;
/* prettier-ignore-end */
