/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandD3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandD3Icon(props: BrandD3IconProps) {
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
          "M3 4h1.8C8.776 4 12 7.582 12 12s-3.224 8-7.2 8H3m9-16h5.472C19.42 4 21 5.79 21 8s-1.58 4-3.528 4m0 0H15m2.472 0H15.12m2.352 0C19.42 12 21 13.79 21 16s-1.58 4-3.528 4H12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandD3Icon;
/* prettier-ignore-end */
