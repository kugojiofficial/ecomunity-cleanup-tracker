/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorseIcon(props: HorseIconProps) {
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
          "M7 10l-.85 8.507A1.357 1.357 0 007.5 20h.146a2 2 0 001.857-1.257l.994-2.486A2 2 0 0112.354 15h1.292a2 2 0 011.857 1.257l.994 2.486A2 2 0 0018.354 20h.146a1.371 1.371 0 001.364-1.494L19 9h-8c0-3-3-5-6-5l-3 6 2 2 3-2zm15 4v-2a3 3 0 00-3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HorseIcon;
/* prettier-ignore-end */
