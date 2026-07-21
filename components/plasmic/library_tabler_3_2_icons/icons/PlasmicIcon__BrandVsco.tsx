/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandVscoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandVscoIcon(props: BrandVscoIconProps) {
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
        d={"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 12a5 5 0 10-10 0 5 5 0 0010 0zm-5-9v4m9 5h-4m-5 9v-4m-9-5h4m11.364-6.364l-2.828 2.828m2.828 9.9l-2.828-2.828m-9.9 2.828l2.828-2.828m-2.828-9.9l2.828 2.828"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandVscoIcon;
/* prettier-ignore-end */
