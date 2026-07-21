/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoSensorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoSensorIcon(props: PhotoSensorIconProps) {
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
          "M17 5h2a2 2 0 012 2v2m0 6v2a2 2 0 01-2 2h-2M7 19H5a2 2 0 01-2-2v-2m0-6V7a2 2 0 012-2h2m0 5a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1v-4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoSensorIcon;
/* prettier-ignore-end */
