/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSentryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSentryIcon(props: BrandSentryIconProps) {
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
          "M3 18c-.006.381.1.755.306 1.076A2 2 0 004.89 20c.646.033-.537 0 .11 0h3a4.992 4.992 0 00-3.66-4.81c.558-.973 1.24-2.149 2.04-3.531A9 9 0 0112 20h4m0 0h3a2 2 0 001.84-2.75L13.74 5a2 2 0 00-3.5 0L8.4 8.176C12.882 10.226 16 14.747 16 20z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSentryIcon;
/* prettier-ignore-end */
