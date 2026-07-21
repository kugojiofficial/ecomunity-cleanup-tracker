/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoEditIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoEditIcon(props: PhotoEditIconProps) {
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
        d={"M15 8h.01M11 20H7a3 3 0 01-3-3V7a3 3 0 013-3h10a3 3 0 013 3v4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 15l4-4c.928-.893 2.072-.893 3 0l3 3m0 0l1-1c.31-.298.644-.497.987-.596m2.433 3.206a2.1 2.1 0 112.97 2.97L18 22h-3v-3l3.42-3.39z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoEditIcon;
/* prettier-ignore-end */
