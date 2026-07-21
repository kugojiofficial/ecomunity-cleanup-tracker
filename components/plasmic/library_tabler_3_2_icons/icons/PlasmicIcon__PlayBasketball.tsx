/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayBasketballIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayBasketballIcon(props: PlayBasketballIconProps) {
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
          "M10 4a1 1 0 102 0 1 1 0 00-2 0zM5 21l3-3 .75-1.5M14 21v-4l-4-3 .5-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 12l1-3 4.5-1 3.5 3 4 1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18.5 16a.5.5 0 100-1 .5.5 0 000 1z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlayBasketballIcon;
/* prettier-ignore-end */
