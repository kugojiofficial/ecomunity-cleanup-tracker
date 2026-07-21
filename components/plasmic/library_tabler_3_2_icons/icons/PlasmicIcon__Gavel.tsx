/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GavelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GavelIcon(props: GavelIconProps) {
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
          "M13 10l7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 01-2.976 0L10 13M6 9l4 4m3-3L9 6M3 21h7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.793 15.793l-3.586-3.586a1 1 0 010-1.414L5.5 8.5 6 9l3-3-.5-.5 2.293-2.293a1 1 0 011.414 0l3.586 3.586a1 1 0 010 1.414L13.5 10.5 13 10l-3 3 .5.5-2.293 2.293a1 1 0 01-1.414 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GavelIcon;
/* prettier-ignore-end */
