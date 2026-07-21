/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClipboardCopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClipboardCopyIcon(props: ClipboardCopyIconProps) {
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
          "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h3m9-9V7a2 2 0 00-2-2h-2m-2 12v-1a1 1 0 011-1h1m3 0h1a1 1 0 011 1v1m0 3v1a1 1 0 01-1 1h-1m-3 0h-1a1 1 0 01-1-1v-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 5a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ClipboardCopyIcon;
/* prettier-ignore-end */
