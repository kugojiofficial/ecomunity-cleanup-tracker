/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodEditIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodEditIcon(props: MoodEditIconProps) {
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
        d={"M20.955 11.104a9 9 0 10-9.895 9.847M9 10h.01M15 10h.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.5 15c.658.672 1.56 1 2.5 1 .126 0 .251-.006.376-.018m6.044-.372a2.1 2.1 0 112.97 2.97L18 22h-3v-3l3.42-3.39z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodEditIcon;
/* prettier-ignore-end */
