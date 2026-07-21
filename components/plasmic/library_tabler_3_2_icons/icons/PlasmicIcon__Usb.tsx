/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsbIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsbIcon(props: UsbIconProps) {
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
          "M10 19a2 2 0 104 0 2 2 0 00-4 0zm2-2V5.5M7 10v3l5 3m0-1.5l5-2V10m-1 0h2V8h-2v2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 9a1 1 0 102 0 1 1 0 00-2 0zm4-3.5h4L12 3l-2 2.5z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UsbIcon;
/* prettier-ignore-end */
