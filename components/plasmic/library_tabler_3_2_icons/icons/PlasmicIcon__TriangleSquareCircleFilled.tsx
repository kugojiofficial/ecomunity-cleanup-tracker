/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TriangleSquareCircleFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function TriangleSquareCircleFilledIcon(
  props: TriangleSquareCircleFilledIconProps
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
          "M11.132 2.504l-4 7A1 1 0 008 11h8a1 1 0 00.868-1.496l-4-7a1 1 0 00-1.736 0zM17 13a4 4 0 11-3.995 4.2L13 17l.005-.2A4 4 0 0117 13zm-8 0H5a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TriangleSquareCircleFilledIcon;
/* prettier-ignore-end */
