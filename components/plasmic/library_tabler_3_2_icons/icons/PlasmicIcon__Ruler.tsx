/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RulerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RulerIcon(props: RulerIconProps) {
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
          "M5 4h14a1 1 0 011 1v5a1 1 0 01-1 1h-7a1 1 0 00-1 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM4 8h2m-2 4h3m-3 4h2M8 4v2m4-2v3m4-3v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RulerIcon;
/* prettier-ignore-end */
