/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandLastfmIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandLastfmIcon(props: BrandLastfmIconProps) {
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
          "M20 8c-.83-1-1.388-1-2-1-.612 0-2 .271-2 2s1.384 2.233 3 3c1.616.767 2.125 1.812 2 3s-1 2-3 2-3-1-3.5-2-1.585-4.78-2.497-6a5 5 0 10-1 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandLastfmIcon;
/* prettier-ignore-end */
