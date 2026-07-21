/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DragDropIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DragDropIcon(props: DragDropIconProps) {
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
        d={"M19 11V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2h2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13 13l9 3-4 2-2 4-3-9zM3 3v.01M7 3v.01M11 3v.01M15 3v.01M3 7v.01M3 11v.01M3 15v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DragDropIcon;
/* prettier-ignore-end */
