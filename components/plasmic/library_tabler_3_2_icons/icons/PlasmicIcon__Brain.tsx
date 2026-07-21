/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrainIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrainIcon(props: BrainIconProps) {
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
          "M15.5 13a3.5 3.5 0 00-3.5 3.5v1a3.5 3.5 0 107 0v-1.8M8.5 13a3.5 3.5 0 013.5 3.5v1a3.5 3.5 0 11-7 0v-1.8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.5 16a3.5 3.5 0 100-7H17"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M19 9.3V6.5a3.5 3.5 0 10-7 0M6.5 16a3.5 3.5 0 110-7H7"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 9.3V6.5a3.5 3.5 0 117 0v10"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrainIcon;
/* prettier-ignore-end */
