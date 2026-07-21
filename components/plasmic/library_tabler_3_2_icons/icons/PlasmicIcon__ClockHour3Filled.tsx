/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour3FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour3FilledIcon(props: ClockHour3FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM12 6a1 1 0 00-1 1v5a1 1 0 001 1h3.5a1 1 0 000-2H13V7a1 1 0 00-.883-.993L12 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour3FilledIcon;
/* prettier-ignore-end */
