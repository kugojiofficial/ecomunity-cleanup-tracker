/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BladeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BladeIcon(props: BladeIconProps) {
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
          "M17.707 3.707l2.586 2.586a1 1 0 010 1.414l-.586.586a1 1 0 000 1.414l.586.586a1 1 0 010 1.414l-8.586 8.586a1 1 0 01-1.414 0l-.586-.586a1 1 0 00-1.414 0l-.586.586a1 1 0 01-1.414 0l-2.586-2.586a1 1 0 010-1.414l.586-.586a1 1 0 000-1.414l-.586-.586a1 1 0 010-1.414l8.586-8.586a1 1 0 011.414 0l.586.586a1 1 0 001.414 0l.586-.586a1 1 0 011.414 0zM8 16l3.2-3.2m1.6-1.6L16 8m-2 0l2 2m-8 4l2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 12a1 1 0 102 0 1 1 0 00-2 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BladeIcon;
/* prettier-ignore-end */
