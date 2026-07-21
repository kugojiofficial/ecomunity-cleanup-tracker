/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EraserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EraserIcon(props: EraserIconProps) {
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
          "M19 20H8.5l-4.21-4.3a1 1 0 010-1.41l10-10a1 1 0 011.41 0l5 5a1 1 0 010 1.41L11.5 20m6.5-6.7L11.7 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EraserIcon;
/* prettier-ignore-end */
