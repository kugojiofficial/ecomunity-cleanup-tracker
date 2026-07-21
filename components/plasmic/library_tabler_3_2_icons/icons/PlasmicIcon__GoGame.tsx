/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GoGameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GoGameIcon(props: GoGameIconProps) {
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
          "M4 6a2 2 0 104 0 2 2 0 00-4 0zm6 6a2 2 0 104 0 2 2 0 00-4 0zm-6 6a2 2 0 104 0 2 2 0 00-4 0zm12 0a2 2 0 104 0 2 2 0 00-4 0zM3 12h7m4 0h7M3 6h1m4 0h13M3 18h1m4 0h8m4 0h1M6 3v1m0 4v8m0 4v1m6-18v7m0 4v7m6-18v13m0 4v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GoGameIcon;
/* prettier-ignore-end */
