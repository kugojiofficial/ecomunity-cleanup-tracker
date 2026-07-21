/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GrillOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GrillOffIcon(props: GrillOffIconProps) {
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
          "M8 8H5a6 6 0 006 6h2c.315 0 .624-.024.926-.071m2.786-1.214a5.99 5.99 0 002.284-4.49V8h-7m6.831 10.815a2 2 0 11-2.663-2.633M9 14l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GrillOffIcon;
/* prettier-ignore-end */
