/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlassIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlassIcon(props: GlassIconProps) {
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
        d={"M8 21h8m-4-5v5m5-16l1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 5c0 .53.527 1.04 1.464 1.414C9.402 6.79 10.674 7 12 7s2.598-.21 3.536-.586C16.473 6.04 17 5.53 17 5c0-.53-.527-1.04-1.464-1.414C14.598 3.21 13.326 3 12 3s-2.598.21-3.536.586C7.527 3.96 7 4.47 7 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GlassIcon;
/* prettier-ignore-end */
