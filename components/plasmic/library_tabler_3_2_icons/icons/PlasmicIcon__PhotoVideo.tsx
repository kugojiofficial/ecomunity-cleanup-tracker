/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoVideoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoVideoIcon(props: PhotoVideoIconProps) {
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
        d={"M9 15H6a3 3 0 01-3-3V6a3 3 0 013-3h6a3 3 0 013 3v3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 12a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3h-6a3 3 0 01-3-3v-6zm-6 0l2.296-2.296a2.41 2.41 0 013.408 0L9 10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M14 13.5v3l2.5-1.5-2.5-1.5zM7 6v.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoVideoIcon;
/* prettier-ignore-end */
