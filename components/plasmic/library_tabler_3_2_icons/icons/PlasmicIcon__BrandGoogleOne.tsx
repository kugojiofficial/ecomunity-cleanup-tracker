/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGoogleOneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGoogleOneIcon(props: BrandGoogleOneIconProps) {
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
        d={"M11 5v13.982a2 2 0 004 0V5a2 2 0 10-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.63 8.407a2.125 2.125 0 00-.074 2.944c.77.834 2.051.869 2.862.077l4.95-4.834c.812-.792.846-2.11.076-2.945a1.984 1.984 0 00-2.861-.077L6.63 8.407z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGoogleOneIcon;
/* prettier-ignore-end */
