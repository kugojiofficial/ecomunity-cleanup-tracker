/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandOnlyfansIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandOnlyfansIcon(props: BrandOnlyfansIconProps) {
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
        d={"M8.5 6a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8.5 15a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm5.5 1c2.5 0 6.42-1.467 7-4h-6c3-1 6.44-3.533 7-6h-4c-3.03 0-3.764-.196-5 1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandOnlyfansIcon;
/* prettier-ignore-end */
