/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ViewportWideIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ViewportWideIcon(props: ViewportWideIconProps) {
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
          "M10 12H3m0 0l3-3m-3 3l3 3m8-3h7m0 0l-3-3m3 3l-3 3M3 6V3h18v3M3 18v3h18v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ViewportWideIcon;
/* prettier-ignore-end */
