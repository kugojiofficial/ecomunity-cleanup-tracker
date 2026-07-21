/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PictureInPictureTop2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PictureInPictureTop2Icon(props: PictureInPictureTop2IconProps) {
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
        d={"M11 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M15 10h5a1 1 0 001-1V6a1 1 0 00-1-1h-5a1 1 0 00-1 1v3a1 1 0 001 1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PictureInPictureTop2Icon;
/* prettier-ignore-end */
