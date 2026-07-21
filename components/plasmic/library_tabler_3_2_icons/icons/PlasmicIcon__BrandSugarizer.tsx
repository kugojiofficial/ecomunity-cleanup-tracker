/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSugarizerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSugarizerIcon(props: BrandSugarizerIconProps) {
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
          "M14.277 16l3.252-3.252a1.61 1.61 0 00-2.277-2.276L12 13.723l-3.252-3.251a1.61 1.61 0 00-2.276 2.276L9.723 16l-3.251 3.252a1.61 1.61 0 102.276 2.277L12 18.277l3.252 3.252a1.61 1.61 0 002.277-2.277L14.277 16zM9 5a3 3 0 106 0 3 3 0 00-6 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSugarizerIcon;
/* prettier-ignore-end */
