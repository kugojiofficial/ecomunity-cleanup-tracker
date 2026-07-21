/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandXamarinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandXamarinIcon(props: BrandXamarinIconProps) {
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
          "M15.958 21H8.041a2 2 0 01-1.732-1l-4.041-7a2 2 0 010-2l4.041-7a2 2 0 011.732-1h7.917a2 2 0 011.732 1l4.042 7a2 2 0 010 2l-4.041 7a2 2 0 01-1.733 1zM15 16L9 8m0 8l6-8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandXamarinIcon;
/* prettier-ignore-end */
