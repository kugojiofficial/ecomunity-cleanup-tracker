/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RocketOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RocketOffIcon(props: RocketOffIconProps) {
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
          "M9.29 9.275A9.05 9.05 0 009 10a6 6 0 00-5 3 8 8 0 017 7 6 6 0 003-5c.241-.085.478-.18.708-.283m2.428-1.61A9 9 0 0020 7a3 3 0 00-3-3 9 9 0 00-6.107 2.864"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 14a6 6 0 00-3 6 6 6 0 006-3m4-8a1 1 0 102 0 1 1 0 00-2 0zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RocketOffIcon;
/* prettier-ignore-end */
