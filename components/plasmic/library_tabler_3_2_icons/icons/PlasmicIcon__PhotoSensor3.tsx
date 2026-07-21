/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoSensor3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoSensor3Icon(props: PhotoSensor3IconProps) {
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
          "M17 4h1a2 2 0 012 2v1m0 10v1a2 2 0 01-2 2h-1M7 20H6a2 2 0 01-2-2v-1M4 7V6a2 2 0 012-2h1m2 8a3 3 0 106 0 3 3 0 00-6 0zm3 6v2m-8-8h2m6-8v2m8 6h-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoSensor3Icon;
/* prettier-ignore-end */
