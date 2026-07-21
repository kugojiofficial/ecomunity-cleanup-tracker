/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriangleInvertedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TriangleInvertedIcon(props: TriangleInvertedIconProps) {
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
          "M10.363 20.405L2.257 6.871A1.914 1.914 0 013.893 4h16.214a1.914 1.914 0 011.636 2.871l-8.106 13.534a1.913 1.913 0 01-3.274 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TriangleInvertedIcon;
/* prettier-ignore-end */
