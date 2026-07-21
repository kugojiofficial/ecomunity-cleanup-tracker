/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRotatedForbidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareRotatedForbidIcon(props: SquareRotatedForbidIconProps) {
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
          "M13.446 2.6l7.955 7.954a2.045 2.045 0 010 2.892l-7.955 7.955a2.045 2.045 0 01-2.892 0l-7.955-7.955a2.045 2.045 0 010-2.892l7.955-7.955a2.045 2.045 0 012.892.001zM9.5 14.5l5-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SquareRotatedForbidIcon;
/* prettier-ignore-end */
