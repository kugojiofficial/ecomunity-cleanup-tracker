/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSolidjsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSolidjsIcon(props: BrandSolidjsIconProps) {
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
          "M2 17.5c4.667 3 8 4.5 10 4.5 2.5 0 4-1.5 4-3.5S14.5 15 12 15c-2 0-5.333.833-10 2.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 13.5c4.667-1.667 8-2.5 10-2.5 2.5 0 4 1.5 4 3.5 0 .738-.204 1.408-.588 1.96l-2.883 3.825M22 6.5C18 3.5 14 2 12 2c-2.04 0-2.618.463-3.419 1.545M2 17.5l3-4m17-7l-3 4M8.581 3.545L5.628 7.256"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.416 12.662C5.906 12.186 5 11.183 5 9.5 5 7 6.5 6 9 6c1.688 0 5.087 1.068 8.198 3.204.605.426 1.206.858 1.802 1.296l-2.302.785"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSolidjsIcon;
/* prettier-ignore-end */
