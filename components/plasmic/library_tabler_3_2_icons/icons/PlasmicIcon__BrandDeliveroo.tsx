/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDeliverooIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDeliverooIcon(props: BrandDeliverooIconProps) {
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
          "M15 11l1-9 5 .5L20 16l-3 6-12.5-2.5-1.5-6 7-1.5-1.5-7.5 4.5-1 2 7.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15.5 16.5a1 1 0 100-2 1 1 0 000 2zm-4-1a1 1 0 100-2 1 1 0 000 2z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDeliverooIcon;
/* prettier-ignore-end */
