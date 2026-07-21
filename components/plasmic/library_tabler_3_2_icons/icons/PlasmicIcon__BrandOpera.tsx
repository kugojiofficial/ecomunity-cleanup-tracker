/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandOperaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandOperaIcon(props: BrandOperaIconProps) {
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
        d={"M3 12a9 9 0 1018.001 0A9 9 0 003 12z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 12c0 1.326.316 2.598.879 3.536C10.44 16.473 11.204 17 12 17s1.559-.527 2.121-1.464c.563-.938.879-2.21.879-3.536s-.316-2.598-.879-3.536C13.56 7.527 12.796 7 12 7s-1.559.527-2.121 1.464C9.316 9.402 9 10.674 9 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandOperaIcon;
/* prettier-ignore-end */
