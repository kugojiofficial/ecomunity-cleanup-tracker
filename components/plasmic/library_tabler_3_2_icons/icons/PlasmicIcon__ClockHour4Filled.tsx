/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour4FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour4FilledIcon(props: ClockHour4FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM12 6a1 1 0 00-1 1v5.026l.009.105.02.107.04.129.048.102.046.078.042.06.069.08.088.083.083.062 3 2a1.002 1.002 0 001.536-1.028 1.001 1.001 0 00-.426-.636L13 11.464V7a1 1 0 00-.883-.993L12 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour4FilledIcon;
/* prettier-ignore-end */
