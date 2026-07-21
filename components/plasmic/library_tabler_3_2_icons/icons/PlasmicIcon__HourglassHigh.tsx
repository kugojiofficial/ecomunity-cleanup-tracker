/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HourglassHighIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HourglassHighIcon(props: HourglassHighIconProps) {
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
        d={"M6.5 7h11M6 20v-2a6 6 0 1112 0v2a1 1 0 01-1 1H7a1 1 0 01-1-1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 4v2a6 6 0 1012 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HourglassHighIcon;
/* prettier-ignore-end */
