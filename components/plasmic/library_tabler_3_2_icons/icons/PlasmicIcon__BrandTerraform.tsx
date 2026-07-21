/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTerraformIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTerraformIcon(props: BrandTerraformIconProps) {
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
          "M15 15.5L3.524 9.284A1 1 0 013 8.404V4.35a1.35 1.35 0 012.03-1.166L15 9v10.65a1.35 1.35 0 01-2.03 1.166l-3.474-2.027A1 1 0 019 17.926V6m6 9.5l5.504-3.21a1 1 0 00.496-.864V7.85a1.35 1.35 0 00-2.03-1.166L15 9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTerraformIcon;
/* prettier-ignore-end */
