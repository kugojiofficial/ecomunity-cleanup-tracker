/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SaladIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SaladIcon(props: SaladIconProps) {
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
          "M4 11h16a1 1 0 011 1v.5c0 1.5-2.517 5.573-4 6.5v1a1 1 0 01-1 1H8a1 1 0 01-1-1v-1c-1.687-1.054-4-5-4-6.5V12a1 1 0 011-1zm14.5 0c.351-1.017.426-2.236.5-3.714V6h-2.256c-2.83 0-4.616.804-5.64 2.076"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.255 11.008A12.203 12.203 0 015 9V8h1.755c.98 0 1.801.124 2.479.35M8 8l1-4 4 2.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13 11v-.5a2.5 2.5 0 00-5 0v.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SaladIcon;
/* prettier-ignore-end */
