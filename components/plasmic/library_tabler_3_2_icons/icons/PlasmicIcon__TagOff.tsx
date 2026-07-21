/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TagOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TagOffIcon(props: TagOffIconProps) {
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
        d={"M7.149 7.144A.498.498 0 007.5 8a.498.498 0 00.341-.135"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3.883 3.875A2.99 2.99 0 003 6v5.172a2 2 0 00.586 1.414l7.71 7.71a2.41 2.41 0 003.408 0L17.5 17.5m2.005-2.005l.79-.79a2.41 2.41 0 000-3.41l-7.71-7.71A2 2 0 0011.173 3H7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TagOffIcon;
/* prettier-ignore-end */
