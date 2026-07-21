/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPnpmIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPnpmIcon(props: BrandPnpmIconProps) {
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
          "M3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zm0-7h4v4h-4v-4zm0-7h4v4h-4V3zm-7 7h4v4h-4v-4zm0-7h4v4h-4V3zM3 3h4v4H3V3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPnpmIcon;
/* prettier-ignore-end */
