/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationSouthIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationSouthIcon(props: NavigationSouthIconProps) {
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
          "M10 8.25c0 .414.336.75.75.75H13a1 1 0 001-1V7a1 1 0 00-1-1h-2a1 1 0 01-1-1V4a1 1 0 011-1h2.25a.75.75 0 01.75.75M16 21l-4-8-4 8 4-2 4 2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NavigationSouthIcon;
/* prettier-ignore-end */
