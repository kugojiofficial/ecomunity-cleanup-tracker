/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimeDurationOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimeDurationOffIcon(props: TimeDurationOffIconProps) {
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
          "M3 12v.01m4.5 7.79v.01M4.2 16.5v.01m0-9.01v.01M12 21a8.994 8.994 0 006.362-2.634m1.685-2.336A9 9 0 0012 3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TimeDurationOffIcon;
/* prettier-ignore-end */
