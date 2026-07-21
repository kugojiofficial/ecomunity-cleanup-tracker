/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EraserOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EraserOffIcon(props: EraserOffIconProps) {
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
          "M3 3l18 18m-2-1H8.5l-4.21-4.3a1 1 0 010-1.41l5-4.993m2.009-2.01l3-3a1 1 0 011.41 0l5 5a1 1 0 010 1.41c-1.417 1.431-2.406 2.432-2.97 3m-2.02 2.043l-4.211 4.256M18 13.3L11.7 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EraserOffIcon;
/* prettier-ignore-end */
