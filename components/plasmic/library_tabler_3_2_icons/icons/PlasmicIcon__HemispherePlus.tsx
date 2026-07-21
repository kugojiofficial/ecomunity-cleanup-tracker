/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HemispherePlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HemispherePlusIcon(props: HemispherePlusIconProps) {
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
          "M3 9c0 .394.233.784.685 1.148.452.364 1.115.695 1.951.973.836.279 1.828.5 2.92.65A25.41 25.41 0 0012 12a25.54 25.54 0 003.444-.228c1.092-.151 2.084-.372 2.92-.65.836-.28 1.499-.61 1.95-.974C20.768 9.784 21 9.394 21 9c0-.394-.233-.784-.685-1.148-.452-.364-1.115-.695-1.951-.973-.836-.279-1.828-.5-2.92-.65A25.419 25.419 0 0012 6a25.54 25.54 0 00-3.444.228c-1.092.151-2.084.372-2.92.65-.836.28-1.499.61-1.95.974C3.232 8.216 3 8.606 3 9z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 9a9 9 0 009 9m8.396-5.752c.4-1.036.605-2.137.604-3.248m-5 10h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HemispherePlusIcon;
/* prettier-ignore-end */
