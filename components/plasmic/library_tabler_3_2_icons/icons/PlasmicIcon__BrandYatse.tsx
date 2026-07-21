/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandYatseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandYatseIcon(props: BrandYatseIconProps) {
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
          "M7 3l5 2.876v5.088l4.197-2.73L21 10.965l-9.281 5.478-2.383 1.41-2.334 1.377-3 1.77v-5.565l3-1.771L7 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandYatseIcon;
/* prettier-ignore-end */
