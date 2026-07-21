/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhotoSensor2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhotoSensor2Icon(props: PhotoSensor2IconProps) {
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
          "M17 5h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M7 19H5a2 2 0 01-2-2V7a2 2 0 012-2h2m1 7a4 4 0 108 0 4 4 0 00-8 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhotoSensor2Icon;
/* prettier-ignore-end */
