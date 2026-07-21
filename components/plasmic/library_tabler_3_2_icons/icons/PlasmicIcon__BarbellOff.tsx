/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarbellOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarbellOffIcon(props: BarbellOffIconProps) {
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
          "M2 12h1m3-4H4a1 1 0 00-1 1v6a1 1 0 001 1h2m.298-9.712A1 1 0 006 7v10a1 1 0 001 1h1a1 1 0 001-1V9m0 3h3m3 3v2a1 1 0 001 1h1c.275 0 .523-.11.704-.29M18 14V7a1 1 0 00-1-1h-1a1 1 0 00-1 1v4m3-3h2a1 1 0 011 1v6a1 1 0 01-1 1m2-4h-1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BarbellOffIcon;
/* prettier-ignore-end */
