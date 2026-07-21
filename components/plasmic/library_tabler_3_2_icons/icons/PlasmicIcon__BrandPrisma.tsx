/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPrismaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPrismaIcon(props: BrandPrismaIconProps) {
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
          "M4.186 16.202l3.615 5.313c.265.39.754.57 1.215.447l10.166-2.718a1.086 1.086 0 00.713-1.511L12.39 2.25a.448.448 0 00-.787-.033L4.15 15.055a1.07 1.07 0 00.036 1.147zM8.5 22L12 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPrismaIcon;
/* prettier-ignore-end */
