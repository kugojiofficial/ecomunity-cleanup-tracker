/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FireHydrantIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FireHydrantIcon(props: FireHydrantIconProps) {
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
          "M5 21h14m-2 0v-5h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1V8A5 5 0 007 8v4H6a1 1 0 00-1 1v2a1 1 0 001 1h1v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 14a2 2 0 104 0 2 2 0 00-4 0zM6 8h12"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FireHydrantIcon;
/* prettier-ignore-end */
