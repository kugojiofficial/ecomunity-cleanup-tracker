/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGitIcon(props: BrandGitIconProps) {
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
          "M15 12a1 1 0 102 0 1 1 0 00-2 0zm-4-4a1 1 0 102 0 1 1 0 00-2 0zm0 8a1 1 0 102 0 1 1 0 00-2 0zm1-1V9m3 2l-2-2m-2-2L9.1 5.1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13.446 2.6l7.955 7.954a2.045 2.045 0 010 2.892l-7.955 7.955a2.045 2.045 0 01-2.892 0l-7.955-7.955a2.045 2.045 0 010-2.892l7.955-7.955a2.045 2.045 0 012.892.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGitIcon;
/* prettier-ignore-end */
