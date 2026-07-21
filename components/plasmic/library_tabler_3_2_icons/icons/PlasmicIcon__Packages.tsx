/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PackagesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PackagesIcon(props: PackagesIconProps) {
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
        d={"M7 16.5l-5-3 5-3 5 3V19l-5 3v-5.5z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2 13.5V19l5 3m0-5.455l5-3.03m5 2.985l-5-3 5-3 5 3V19l-5 3v-5.5zM12 19l5 3m0-5.5l5-3m-10 0V8L7 5l5-3 5 3v5.5M7 5.03v5.455M12 8l5-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PackagesIcon;
/* prettier-ignore-end */
