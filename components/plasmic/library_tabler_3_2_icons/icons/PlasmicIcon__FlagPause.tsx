/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagPauseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagPauseIcon(props: FlagPauseIconProps) {
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
          "M13.536 15.029A4.988 4.988 0 0112 14a5 5 0 00-7 0V5a5 5 0 017 0 5 5 0 007 0v8.5M5 21v-7m12 3v5m4-5v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlagPauseIcon;
/* prettier-ignore-end */
