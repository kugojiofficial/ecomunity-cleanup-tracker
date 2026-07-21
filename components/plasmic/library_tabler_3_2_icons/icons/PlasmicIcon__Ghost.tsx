/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GhostIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GhostIcon(props: GhostIconProps) {
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
          "M5 11a7 7 0 0114 0v7a1.78 1.78 0 01-3.1 1.4 1.651 1.651 0 00-2.6 0 1.651 1.651 0 01-2.6 0 1.651 1.651 0 00-2.6 0A1.78 1.78 0 015 18v-7zm5-1h.01M14 10h.01M10 14a3.5 3.5 0 004 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GhostIcon;
/* prettier-ignore-end */
