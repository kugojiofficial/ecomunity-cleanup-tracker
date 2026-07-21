/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellExclamationIcon(props: BellExclamationIconProps) {
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
          "M15 17H4a4 4 0 002-3v-3a7 7 0 014-6 2 2 0 114 0 7 7 0 014 6v1.5M9 17v1a3 3 0 006 0v-1m4-1v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BellExclamationIcon;
/* prettier-ignore-end */
