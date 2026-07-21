/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScoreboardIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScoreboardIcon(props: ScoreboardIconProps) {
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
          "M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm9-2v2m0 3v1m0 3v1m0 3v1M7 3v2m10-2v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15 10.5v3a1.5 1.5 0 103 0v-3a1.5 1.5 0 10-3 0zM6 9h1.5a1.5 1.5 0 010 3m0 0H7m.5 0a1.5 1.5 0 110 3H6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScoreboardIcon;
/* prettier-ignore-end */
