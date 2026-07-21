/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour8FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour8FilledIcon(props: ClockHour8FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM12 6a1 1 0 00-1 1v4.464l-2.555 1.704a1 1 0 00-.336 1.286l.059.1a.998.998 0 001.387.278l3.027-2.018.087-.07.074-.075.075-.094.052-.08.035-.07.051-.132.031-.135.01-.082L13 12V7a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour8FilledIcon;
/* prettier-ignore-end */
