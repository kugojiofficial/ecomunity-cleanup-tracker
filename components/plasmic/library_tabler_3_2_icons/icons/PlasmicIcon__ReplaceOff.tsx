/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReplaceOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReplaceOffIcon(props: ReplaceOffIconProps) {
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
          "M7 3h1a1 1 0 011 1v1m-.303 3.717A1 1 0 018 9H4a1 1 0 01-1-1V4c0-.28.115-.532.3-.714M19 15h1a1 1 0 011 1v1m-.303 3.717A1 1 0 0120 21h-4a1 1 0 01-1-1v-4c0-.28.115-.532.3-.714M21 11V8a2 2 0 00-2-2h-6m0 0l3 3m-3-3l3-3M3 13v3a2 2 0 002 2h6m0 0l-3-3m3 3l-3 3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ReplaceOffIcon;
/* prettier-ignore-end */
