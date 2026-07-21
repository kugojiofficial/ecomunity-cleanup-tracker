/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour9FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour9FilledIcon(props: ClockHour9FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-4.883 9.653A1 1 0 0013 12V7a1 1 0 00-2 0v4H8.5a1 1 0 00-.993.883L7.5 12a1 1 0 001 1H12l.117-.007z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour9FilledIcon;
/* prettier-ignore-end */
