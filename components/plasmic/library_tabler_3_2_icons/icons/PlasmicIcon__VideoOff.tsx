/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VideoOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VideoOffIcon(props: VideoOffIconProps) {
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
          "M3 3l18 18m-6-10v-1l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.675.946"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 6h3a2 2 0 012 2v3m0 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VideoOffIcon;
/* prettier-ignore-end */
