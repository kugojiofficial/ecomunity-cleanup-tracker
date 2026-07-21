/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandRustIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandRustIcon(props: BrandRustIconProps) {
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
          "M10.139 3.463c.473-1.95 3.249-1.95 3.722 0a1.917 1.917 0 002.859 1.185c1.714-1.045 3.678.918 2.633 2.633a1.916 1.916 0 001.184 2.858c1.95.473 1.95 3.249 0 3.722a1.917 1.917 0 00-1.185 2.859c1.045 1.714-.918 3.678-2.633 2.633a1.917 1.917 0 00-2.858 1.184c-.473 1.95-3.249 1.95-3.722 0a1.916 1.916 0 00-2.859-1.185c-1.714 1.045-3.678-.918-2.633-2.633a1.916 1.916 0 00-1.184-2.858c-1.95-.473-1.95-3.249 0-3.722A1.916 1.916 0 004.648 7.28c-1.045-1.714.918-3.678 2.633-2.633a1.914 1.914 0 002.858-1.184z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8 12h6a2 2 0 000-4H8v8-4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M19 16h-2a2 2 0 01-2-2 2 2 0 00-2-2h-1M9 8H5m0 8h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandRustIcon;
/* prettier-ignore-end */
