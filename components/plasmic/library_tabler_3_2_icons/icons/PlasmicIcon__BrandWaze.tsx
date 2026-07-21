/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandWazeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandWazeIcon(props: BrandWazeIconProps) {
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
          "M6.66 17.52A6.999 6.999 0 013 13c2 0 3-1 3-2.51C6 6.57 8.25 3 13.38 3 18 3 21 6.51 21 11a8.08 8.08 0 01-3.39 6.62M10 18.69c1.098.207 2.213.308 3.33.3h.54"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 19a2 2 0 104 0 2 2 0 00-4 0zm-8 0a2 2 0 104 0 2 2 0 00-4 0zM16 9h.01M11 9h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandWazeIcon;
/* prettier-ignore-end */
