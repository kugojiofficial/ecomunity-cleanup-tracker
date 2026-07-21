/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTinderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTinderIcon(props: BrandTinderIconProps) {
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
          "M18.918 8.174c2.56 4.982.501 11.656-5.38 12.626C5.836 22.487.698 13.084 6.484 7.571 6.793 7.266 7.645 6.476 8 6.222c0 .528.27 3.475 1 3.167 3 0 4-4.222 3.587-7.389 2.7 1.411 4.987 3.376 6.331 6.174z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTinderIcon;
/* prettier-ignore-end */
