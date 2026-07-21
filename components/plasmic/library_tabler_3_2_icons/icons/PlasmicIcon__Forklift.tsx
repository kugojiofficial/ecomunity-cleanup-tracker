/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ForkliftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ForkliftIcon(props: ForkliftIconProps) {
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
          "M3 17a2 2 0 104 0 2 2 0 00-4 0zm9 0a2 2 0 104 0 2 2 0 00-4 0zm-5 0h5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3 17v-6h13v6M5 11V7h4m0 4V5h4l3 6m6 4h-3V5m-3 8h3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ForkliftIcon;
/* prettier-ignore-end */
