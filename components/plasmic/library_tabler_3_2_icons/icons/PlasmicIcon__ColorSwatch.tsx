/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColorSwatchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColorSwatchIcon(props: ColorSwatchIconProps) {
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
        d={"M19 3h-4a2 2 0 00-2 2v12a4 4 0 108 0V5a2 2 0 00-2-2z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13 7.35l-2-2a2 2 0 00-2.828 0L5.344 8.178a2 2 0 000 2.828l9 9"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M7.3 13H5a2 2 0 00-2 2v4a2 2 0 002 2h12m0-4v.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ColorSwatchIcon;
/* prettier-ignore-end */
