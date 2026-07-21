/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDisneyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDisneyIcon(props: BrandDisneyIconProps) {
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
          "M3.22 5.838C1.913 5.688 2 5.26 2 5.044 2 4.828 2.424 4 6.34 4 11.034 4 21 7.645 21 14.042s-8.71 4.931-10.435 4.52C8.841 18.15 5 16.306 5 14.388 5 12.993 8.08 12 11.715 12 15.349 12 17 13.041 17 14c0 .5-.074 1.229-1 1.5M10.02 8a505.162 505.162 0 000 13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDisneyIcon;
/* prettier-ignore-end */
