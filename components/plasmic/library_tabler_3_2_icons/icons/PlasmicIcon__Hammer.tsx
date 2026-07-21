/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HammerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HammerIcon(props: HammerIconProps) {
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
          "M11.414 10l-7.383 7.418a2.09 2.09 0 000 2.967 2.11 2.11 0 002.976 0L14.414 13m3.707 2.293l2.586-2.586a1 1 0 000-1.414l-7.586-7.586a1 1 0 00-1.414 0L9.121 6.293a1 1 0 000 1.414l7.586 7.586a1 1 0 001.414 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HammerIcon;
/* prettier-ignore-end */
