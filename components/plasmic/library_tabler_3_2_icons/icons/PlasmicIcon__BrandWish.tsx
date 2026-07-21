/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandWishIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandWishIcon(props: BrandWishIconProps) {
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
          "M2 6l5.981 2.392-.639 6.037c-.18.893.06 1.819.65 2.514A3 3 0 0010.373 18a4.328 4.328 0 004.132-3.57c-.18.893.06 1.819.65 2.514A3.001 3.001 0 0017.535 18a4.328 4.328 0 004.132-3.57L22 9.797m-7.496 4.632l.334-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandWishIcon;
/* prettier-ignore-end */
