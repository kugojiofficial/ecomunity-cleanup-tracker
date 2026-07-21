/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimeDuration45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimeDuration45Icon(props: TimeDuration45IconProps) {
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
          "M13 15h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2V9h3M7 9v2a1 1 0 001 1h1m1-3v6M7.5 4.2v.01M4.2 7.5v.01M3 12a9 9 0 109-9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TimeDuration45Icon;
/* prettier-ignore-end */
