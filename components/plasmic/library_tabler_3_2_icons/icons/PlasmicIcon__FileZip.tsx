/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileZipIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileZipIcon(props: FileZipIconProps) {
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
        d={"M6 20.735A2 2 0 015 19V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2h-1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 17a2 2 0 012 2v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a2 2 0 012-2zm0-12h-1m3 2h-1m-1 2h-1m3 2h-1m-1 2h-1m3 2h-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileZipIcon;
/* prettier-ignore-end */
