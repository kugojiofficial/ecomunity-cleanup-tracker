/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGraphqlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGraphqlIcon(props: BrandGraphqlIconProps) {
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
        d={"M4 8l8-5 8 5v8l-8 5-8-5V8z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 4l7.5 12h-15L12 4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 3a1 1 0 102 0 1 1 0 00-2 0zm0 18a1 1 0 102 0 1 1 0 00-2 0zM3 8a1 1 0 102 0 1 1 0 00-2 0zm0 8a1 1 0 102 0 1 1 0 00-2 0zm16 0a1 1 0 102 0 1 1 0 00-2 0zm0-8a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGraphqlIcon;
/* prettier-ignore-end */
