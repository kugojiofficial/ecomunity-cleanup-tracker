/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EaseInOutControlPointsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EaseInOutControlPointsIcon(
  props: EaseInOutControlPointsIconProps
) {
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
          "M17 20a2 2 0 104 0 2 2 0 00-4 0zm0 0h-2M7 4a2 2 0 11-4 0 2 2 0 014 0zm0 0h2m5 0h-2m0 16h-2m-7 0c8 0 10-16 18-16"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EaseInOutControlPointsIcon;
/* prettier-ignore-end */
