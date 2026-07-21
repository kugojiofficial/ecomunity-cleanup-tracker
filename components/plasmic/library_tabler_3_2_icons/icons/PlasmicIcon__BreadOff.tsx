/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BreadOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BreadOffIcon(props: BreadOffIconProps) {
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
          "M8 4l10 .005V4a3 3 0 012 5.235V16m-.59 3.418c-.36.36-.86.582-1.41.582H6a2 2 0 01-2-2V9.236a3 3 0 01.418-4.785M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BreadOffIcon;
/* prettier-ignore-end */
