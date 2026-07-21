/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileTypeSqlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileTypeSqlIcon(props: FileTypeSqlIconProps) {
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
        d={"M14 3v4a1 1 0 001 1h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 3v4a1 1 0 001 1h4M5 20.25c0 .414.336.75.75.75H7a1 1 0 001-1v-1a1 1 0 00-1-1H6a1 1 0 01-1-1v-1a1 1 0 011-1h1.25a.75.75 0 01.75.75"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 12V5a2 2 0 012-2h7l5 5v4m-1 3v6h2m-7-6a2 2 0 012 2v2a2 2 0 01-4 0v-2a2 2 0 012-2zm1 5l1.5 1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileTypeSqlIcon;
/* prettier-ignore-end */
