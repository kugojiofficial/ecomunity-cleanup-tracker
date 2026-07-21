/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColorFilterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColorFilterIcon(props: ColorFilterIconProps) {
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
          "M13.58 13.79c.27.68.42 1.43.42 2.21 0 1.77-.77 3.37-2 4.46A5.93 5.93 0 018 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.58 10.21C20.12 10.9 22 13.24 22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 01-4-1.54"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 8a6 6 0 1012 0A6 6 0 006 8z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ColorFilterIcon;
/* prettier-ignore-end */
