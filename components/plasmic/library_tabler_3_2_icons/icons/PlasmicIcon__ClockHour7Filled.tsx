/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour7FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour7FilledIcon(props: ClockHour7FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-4.007 8.777L13 12V7a1 1 0 00-2 0v4.696l-1.832 2.75a1 1 0 00.184 1.316l.093.07a1 1 0 001.387-.277l2.024-3.038.06-.116.032-.081.03-.109.015-.094z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour7FilledIcon;
/* prettier-ignore-end */
