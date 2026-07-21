/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAmdIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAmdIcon(props: BrandAmdIconProps) {
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
        d={"M16 16V9c0-.566-.434-1-1-1H8L3 3h17c.566 0 1 .434 1 1v17l-5-5z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.293 20.707L16 16H9a1 1 0 01-1-1V8l-4.707 4.707a1 1 0 00-.293.707V20a1 1 0 001 1h6.586a1 1 0 00.707-.293z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAmdIcon;
/* prettier-ignore-end */
