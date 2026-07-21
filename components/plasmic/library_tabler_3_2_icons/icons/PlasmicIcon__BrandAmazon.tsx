/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAmazonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAmazonIcon(props: BrandAmazonIconProps) {
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
          "M17 12.5a15.199 15.199 0 01-7.37 1.44A14.62 14.62 0 013 11m16.5 4c.907-1.411 1.451-3.323 1.5-5-1.197-.773-2.577-.935-4-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAmazonIcon;
/* prettier-ignore-end */
