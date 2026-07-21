/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScaleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScaleOffIcon(props: ScaleOffIconProps) {
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
          "M7 20h10M9.452 5.425L12 5l6 1m-6-3v5m0 4v8m-3-8L6 6l-3 6a3 3 0 006 0zm9.873 2.871A3 3 0 0021 12l-3-6-2.677 5.355M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScaleOffIcon;
/* prettier-ignore-end */
