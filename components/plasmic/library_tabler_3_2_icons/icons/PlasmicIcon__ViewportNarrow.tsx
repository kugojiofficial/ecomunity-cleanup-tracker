/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ViewportNarrowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ViewportNarrowIcon(props: ViewportNarrowIconProps) {
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
          "M3 12h7m0 0L7 9m3 3l-3 3m14-3h-7m0 0l3-3m-3 3l3 3M9 6V3h6v3M9 18v3h6v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ViewportNarrowIcon;
/* prettier-ignore-end */
