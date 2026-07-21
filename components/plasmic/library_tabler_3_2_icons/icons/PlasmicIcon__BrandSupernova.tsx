/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSupernovaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSupernovaIcon(props: BrandSupernovaIconProps) {
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
        d={"M10 12a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15 15h.5c3.038 0 5.5-1.343 5.5-3s-2.462-3-5.5-3c-1.836 0-3.462.49-4.46 1.245M9 9h-.5C5.462 9 3 10.343 3 12s2.462 3 5.5 3c1.844 0 3.476-.495 4.474-1.255"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15 9v-.5C15 5.462 13.657 3 12 3S9 5.462 9 8.5c0 1.833.49 3.457 1.241 4.456M9 15v.5c0 3.038 1.343 5.5 3 5.5s3-2.462 3-5.5c0-1.842-.494-3.472-1.252-4.47"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSupernovaIcon;
/* prettier-ignore-end */
