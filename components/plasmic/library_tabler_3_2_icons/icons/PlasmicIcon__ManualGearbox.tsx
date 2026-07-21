/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ManualGearboxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ManualGearboxIcon(props: ManualGearboxIconProps) {
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
          "M3 6a2 2 0 104 0 2 2 0 00-4 0zm7 0a2 2 0 104 0 2 2 0 00-4 0zm7 0a2 2 0 104 0 2 2 0 00-4 0zM3 18a2 2 0 104 0 2 2 0 00-4 0zm7 0a2 2 0 104 0 2 2 0 00-4 0zM5 8v8m7-8v8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M19 8v2a2 2 0 01-2 2H5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ManualGearboxIcon;
/* prettier-ignore-end */
