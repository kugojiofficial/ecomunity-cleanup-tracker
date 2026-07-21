/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SoupOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SoupOffIcon(props: SoupOffIconProps) {
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
          "M3 19h16m-4-8h6c0 1.691-.525 3.26-1.42 4.552m-2.034 2.032A7.963 7.963 0 0113 19h-2a8 8 0 01-8-8h8m1-6v3m3-3v3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SoupOffIcon;
/* prettier-ignore-end */
