/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandMoveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandMoveIcon(props: HandMoveIconProps) {
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
          "M8 13V4.5a1.5 1.5 0 013 0V12m0-.5v-2a1.5 1.5 0 113 0V12m0-1.5a1.5 1.5 0 113 0V12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 11.5a1.5 1.5 0 113 0V16a6 6 0 01-6 6h-2 .208a6 6 0 01-5.012-2.7L7 19c-.312-.479-1.407-2.388-3.286-5.728a1.5 1.5 0 01.536-2.022 1.867 1.867 0 012.28.28L8 13M2.541 5.594a13.487 13.487 0 012.46-1.427M14 3.458a13.44 13.44 0 013.685 1.612"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HandMoveIcon;
/* prettier-ignore-end */
