/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileBrokenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileBrokenIcon(props: FileBrokenIconProps) {
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
          "M5 7V5a2 2 0 012-2h7l5 5v2m0 9a2 2 0 01-2 2H7a2 2 0 01-2-2m0-3h.01M5 13h.01M5 10h.01M19 13h.01M19 16h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileBrokenIcon;
/* prettier-ignore-end */
