/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BallAmericanFootballIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BallAmericanFootballIcon(props: BallAmericanFootballIconProps) {
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
        d={"M15 9l-6 6m1-3l2 2m0-4l2 2m-6 9a5 5 0 00-5-5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16 3C8.82 3 3 8.82 3 16a5 5 0 005 5c7.18 0 13-5.82 13-13a5 5 0 00-5-5zm0 0a5 5 0 005 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BallAmericanFootballIcon;
/* prettier-ignore-end */
