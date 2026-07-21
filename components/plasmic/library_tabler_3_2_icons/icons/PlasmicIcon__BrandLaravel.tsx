/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandLaravelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandLaravelIcon(props: BrandLaravelIconProps) {
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
          "M3 17l8 5 7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5V17zm8 1v4m-4-6.5l7-4m0-4v4m0 0l4 2.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 13V5.5L7 3 3 5.5M7 8l4-2.5m7 4.5l4-2.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandLaravelIcon;
/* prettier-ignore-end */
