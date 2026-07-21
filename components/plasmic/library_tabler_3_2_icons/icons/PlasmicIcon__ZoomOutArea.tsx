/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomOutAreaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomOutAreaIcon(props: ZoomOutAreaIconProps) {
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
          "M13 15h4m-7 0a5 5 0 1010 0 5 5 0 00-10 0zm12 7l-3-3M6 18H5a2 2 0 01-2-2v-1m0-4v-1m0-4V5a2 2 0 012-2h1m4 0h1m4 0h1a2 2 0 012 2v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ZoomOutAreaIcon;
/* prettier-ignore-end */
