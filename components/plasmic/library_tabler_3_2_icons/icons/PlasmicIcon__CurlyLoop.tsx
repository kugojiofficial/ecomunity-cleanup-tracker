/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurlyLoopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurlyLoopIcon(props: CurlyLoopIconProps) {
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
          "M21 8c-4 0-7 2-7 5a3 3 0 006 0c0-3-2.5-5-8-5s-8 2-8 5a3 3 0 006 0c0-3-3-5-7-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurlyLoopIcon;
/* prettier-ignore-end */
