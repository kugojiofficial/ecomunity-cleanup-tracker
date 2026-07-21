/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowsShuffleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowsShuffleIcon(props: ArrowsShuffleIconProps) {
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
        d={"M18 4l3 3-3 3m0 10l3-3-3-3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 7h3a5 5 0 015 5 5 5 0 005 5h5m0-10h-5a4.978 4.978 0 00-3 1m-4 8a4.983 4.983 0 01-3 1H3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArrowsShuffleIcon;
/* prettier-ignore-end */
