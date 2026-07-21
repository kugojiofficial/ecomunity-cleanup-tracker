/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AmpersandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AmpersandIcon(props: AmpersandIconProps) {
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
          "M19 20L8.597 9.028a2.948 2.948 0 01.954-4.803 2.94 2.94 0 014.068 2.72c0 .781-.31 1.53-.861 2.083l-4.68 4.687a3.685 3.685 0 001.193 6.005 3.674 3.674 0 004.007-.798L19 13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AmpersandIcon;
/* prettier-ignore-end */
