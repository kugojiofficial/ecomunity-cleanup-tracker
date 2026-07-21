/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReportIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReportIcon(props: ReportIconProps) {
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
          "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h5.697M18 14v4h4m-4-7V7a2 2 0 00-2-2h-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 5a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2zm6 13a4 4 0 108 0 4 4 0 00-8 0zm-6-7h4m-4 4h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ReportIcon;
/* prettier-ignore-end */
