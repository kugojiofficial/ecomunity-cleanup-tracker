/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShirtOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShirtOffIcon(props: ShirtOffIconProps) {
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
          "M8.243 4.252L9 4c0 .43.09.837.252 1.206m1.395 1.472A3 3 0 0015 4l6 2v5h-3v3m0 4v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-8H3V6l2.26-.753M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShirtOffIcon;
/* prettier-ignore-end */
