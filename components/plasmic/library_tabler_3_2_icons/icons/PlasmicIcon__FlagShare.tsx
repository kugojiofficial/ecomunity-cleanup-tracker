/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagShareIcon(props: FlagShareIconProps) {
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
          "M13.13 14.833A5.001 5.001 0 0112 14a5 5 0 00-7 0V5a5 5 0 017 0 5 5 0 007 0v8M5 21v-7m11 8l5-5m0 4.5V17h-4.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlagShareIcon;
/* prettier-ignore-end */
