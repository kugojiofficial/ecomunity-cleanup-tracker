/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StereoGlassesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StereoGlassesIcon(props: StereoGlassesIconProps) {
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
          "M8 3H6l-3 9m13-9h2l3 9M3 12v7a1 1 0 001 1h4.586a1 1 0 00.707-.293l2-2a1 1 0 011.414 0l2 2a1 1 0 00.707.293H20a1 1 0 001-1v-7H3zm4 4h1m8 0h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default StereoGlassesIcon;
/* prettier-ignore-end */
