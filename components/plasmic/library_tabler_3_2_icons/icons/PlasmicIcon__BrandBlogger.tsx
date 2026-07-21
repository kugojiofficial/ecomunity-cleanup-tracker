/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBloggerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBloggerIcon(props: BrandBloggerIconProps) {
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
          "M8 21h8a5 5 0 005-5v-3a3 3 0 00-3-3h-1V8a5 5 0 00-5-5H8a5 5 0 00-5 5v8a5 5 0 005 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 8.5A1.5 1.5 0 018.5 7h3a1.5 1.5 0 010 3h-3A1.5 1.5 0 017 8.5zm0 7A1.5 1.5 0 018.5 14h7a1.5 1.5 0 110 3h-7A1.5 1.5 0 017 15.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBloggerIcon;
/* prettier-ignore-end */
