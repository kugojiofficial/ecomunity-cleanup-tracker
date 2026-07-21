/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoSearchIcon(props: PhotoSearchIconProps) {
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
        d={"M15 8h.01M11.5 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v5.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15 18a3 3 0 106 0 3 3 0 00-6 0zm5.2 2.2L22 22M3 16l5-5c.928-.893 2.072-.893 3 0l2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoSearchIcon;
/* prettier-ignore-end */
