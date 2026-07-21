/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ImageInPictureIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ImageInPictureIcon(props: ImageInPictureIconProps) {
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
          "M13 15c-2 0-5 1-5 5m-4-7a2 2 0 012-2h5a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5zm0-6V5a1 1 0 011-1h2m4 0h2m4 0h2a1 1 0 011 1v2m0 4v2m0 4v2a1 1 0 01-1 1h-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ImageInPictureIcon;
/* prettier-ignore-end */
