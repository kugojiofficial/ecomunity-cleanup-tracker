/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EscalatorDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EscalatorDownIcon(props: EscalatorDownIconProps) {
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
          "M4.5 7h2.733a2 2 0 011.337.513L18 16h1.5a2.5 2.5 0 010 5h-2.733a2 2 0 01-1.337-.513L6 12H4.5a2.5 2.5 0 010-5zM18 3v7m-3-3l3 3 3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EscalatorDownIcon;
/* prettier-ignore-end */
