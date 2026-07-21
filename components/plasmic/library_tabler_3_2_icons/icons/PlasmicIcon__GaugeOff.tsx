/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GaugeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GaugeOffIcon(props: GaugeOffIconProps) {
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
          "M20.038 16.052A9 9 0 007.971 3.95M5.638 5.636a9 9 0 0012.73 12.726m-7.085-7.059a1 1 0 001.419 1.41M14 10l2-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 12c0-1.386.564-2.64 1.475-3.546m2.619-1.372C11.388 7.028 11.691 7 12 7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GaugeOffIcon;
/* prettier-ignore-end */
