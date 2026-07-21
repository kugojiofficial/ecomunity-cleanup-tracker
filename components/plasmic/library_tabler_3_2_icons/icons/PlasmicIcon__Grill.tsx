/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GrillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GrillIcon(props: GrillIconProps) {
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
          "M19 8H5a6 6 0 006 6h2a6 6 0 006-5.775V8zm-2 12a2 2 0 110-4 2 2 0 010 4zm-2-6l1 2m-7-2l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GrillIcon;
/* prettier-ignore-end */
