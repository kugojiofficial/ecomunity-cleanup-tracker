/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgIcon(props: SvgIconProps) {
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
          "M21 8h-2a2 2 0 00-2 2v4a2 2 0 002 2h2v-4h-1M7 8H4a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 011 1v2a1 1 0 01-1 1H3m7-8l1.5 8h1L14 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SvgIcon;
/* prettier-ignore-end */
