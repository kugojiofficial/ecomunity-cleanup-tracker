/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoPauseIcon(props: PhotoPauseIconProps) {
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
        d={"M15 8h.01M13 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v7"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 16l5-5c.928-.893 2.072-.893 3 0l3 3m0 0l1-1c.928-.893 2.072-.893 3 0m-1 4v5m4-5v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoPauseIcon;
/* prettier-ignore-end */
