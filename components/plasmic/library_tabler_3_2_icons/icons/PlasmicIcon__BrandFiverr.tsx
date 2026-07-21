/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandFiverrIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandFiverrIcon(props: BrandFiverrIconProps) {
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
          "M15 3h-2a6 6 0 00-6 6H4v4h3v8h4v-7h4v7h4V10h-8V8.967A1.968 1.968 0 0113 7h2V3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandFiverrIcon;
/* prettier-ignore-end */
