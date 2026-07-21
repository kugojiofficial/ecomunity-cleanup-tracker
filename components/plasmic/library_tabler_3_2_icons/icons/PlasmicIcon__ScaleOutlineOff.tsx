/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScaleOutlineOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScaleOutlineOffIcon(props: ScaleOutlineOffIconProps) {
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
          "M7 3h10a4 4 0 014 4v10m-1.173 2.83A3.987 3.987 0 0117 21H7a4 4 0 01-4-4V7c0-1.104.447-2.103 1.17-2.827"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.062 7.062A7.002 7.002 0 0117 9.095 144.04 144.04 0 0015 11m-3.723.288a3 3 0 00-1.315.71L7.006 9.095c.346-.354.729-.67 1.142-.942M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScaleOutlineOffIcon;
/* prettier-ignore-end */
