/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletsIcon(props: DropletsIconProps) {
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
          "M4.072 20.3a2.999 2.999 0 004.526-3.798l-2.095-3.227a.6.6 0 00-1.005 0L3.4 16.502a3.003 3.003 0 00.672 3.798zm12 0a2.999 2.999 0 004.526-3.798l-2.095-3.227a.599.599 0 00-1.005 0L15.4 16.502a3.003 3.003 0 00.671 3.798h.001zm-6-10a2.999 2.999 0 004.526-3.798l-2.095-3.227a.6.6 0 00-1.005 0L9.4 6.502a3.003 3.003 0 00.672 3.798z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DropletsIcon;
/* prettier-ignore-end */
