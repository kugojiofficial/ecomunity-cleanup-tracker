/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarbellIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarbellIcon(props: BarbellIconProps) {
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
          "M2 12h1m3-4H4a1 1 0 00-1 1v6a1 1 0 001 1h2m0-9v10a1 1 0 001 1h1a1 1 0 001-1V7a1 1 0 00-1-1H7a1 1 0 00-1 1zm3 5h6m0-5v10a1 1 0 001 1h1a1 1 0 001-1V7a1 1 0 00-1-1h-1a1 1 0 00-1 1zm3 1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2m4-4h-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BarbellIcon;
/* prettier-ignore-end */
