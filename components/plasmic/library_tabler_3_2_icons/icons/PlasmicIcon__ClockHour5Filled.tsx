/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour5FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour5FilledIcon(props: ClockHour5FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM11 7v5.022l.003.054.02.135.005.025c.014.056.033.112.056.165l.04.082.04.065 2.004 3.007a1 1 0 101.664-1.11L13 11.697V7a1 1 0 00-.883-.993L12 6a1 1 0 00-1 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour5FilledIcon;
/* prettier-ignore-end */
