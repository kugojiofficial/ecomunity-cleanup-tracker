/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandVkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandVkIcon(props: BrandVkIconProps) {
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
          "M14 19h-4a8 8 0 01-8-8V6h4v5a4 4 0 004 4V6h4v4.5h.03A4.531 4.531 0 0018 6.004h4l-.342 1.711A6.858 6.858 0 0118 12.504a5.34 5.34 0 013.566 4.111L22 19.004h-4a4.53 4.53 0 00-3.97-4.496v4.5L14 19z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandVkIcon;
/* prettier-ignore-end */
