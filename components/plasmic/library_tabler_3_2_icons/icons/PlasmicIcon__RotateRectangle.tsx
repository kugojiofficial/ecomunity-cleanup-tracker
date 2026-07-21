/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RotateRectangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RotateRectangleIcon(props: RotateRectangleIconProps) {
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
          "M10.09 4.01l.496-.495a2 2 0 012.828 0l7.071 7.07a1.998 1.998 0 010 2.83l-7.07 7.07a1.998 1.998 0 01-2.83 0l-7.07-7.07a2 2 0 010-2.83L7.05 7.05H3.062m3.988 3.988V7.05"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RotateRectangleIcon;
/* prettier-ignore-end */
