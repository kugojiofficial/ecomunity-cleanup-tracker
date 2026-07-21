/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallAmericanFootballOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallAmericanFootballOffIcon(
  props: BallAmericanFootballOffIconProps
) {
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
        d={"M15 9l-1 1m-2 2l-3 3m1-3l2 2m-4 7a5 5 0 00-5-5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.813 6.802A12.96 12.96 0 003 16a5 5 0 005 5 12.96 12.96 0 009.186-3.801m1.789-2.227A12.94 12.94 0 0021 8a5 5 0 00-5-5 12.94 12.94 0 00-6.967 2.022M16 3a5 5 0 005 5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BallAmericanFootballOffIcon;
/* prettier-ignore-end */
