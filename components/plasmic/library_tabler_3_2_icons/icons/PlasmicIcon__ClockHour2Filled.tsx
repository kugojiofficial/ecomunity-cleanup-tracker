/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour2FilledIcon(props: ClockHour2FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM11 7v5.022l.003.054.02.135.005.025c.014.056.033.112.056.165l.04.082.062.099.07.087.075.074.094.075.08.052.07.035.132.051.135.031.082.01.124.002.113-.012.108-.024.106-.036.108-.051.065-.04 3.007-2.004a1 1 0 10-1.11-1.664L13 10.13V7a1 1 0 00-.883-.993L12 6a1 1 0 00-1 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour2FilledIcon;
/* prettier-ignore-end */
