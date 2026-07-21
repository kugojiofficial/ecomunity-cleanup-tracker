/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour6FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour6FilledIcon(props: ClockHour6FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM11 15.5a1 1 0 002 0V7a1 1 0 00-2 0v8.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour6FilledIcon;
/* prettier-ignore-end */
