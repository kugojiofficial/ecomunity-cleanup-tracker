/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandZoomIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandZoomIcon(props: BrandZoomIconProps) {
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
          "M17.011 9.385v5.128L21 18V6l-3.989 3.385zM3.887 6h10.08C15.435 6 17 7.203 17 8.803v8.196a.99.99 0 01-.975 1H5.652c-1.667 0-2.652-1.5-2.652-3l.01-8a.882.882 0 01.208-.71.841.841 0 01.67-.287L3.887 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandZoomIcon;
/* prettier-ignore-end */
