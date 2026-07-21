/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonalPrismIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonalPrismIcon(props: HexagonalPrismIconProps) {
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
          "M20.792 6.996l-3.775 2.643A2.01 2.01 0 0115.87 10H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11m8-11v11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3.853 18.274l3.367 2.363A2 2 0 008.367 21h7.265c.41 0 .811-.126 1.147-.363l3.367-2.363c.536-.375.854-.99.854-1.643V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0015.633 3H8.367c-.41 0-.811.126-1.147.363L3.853 5.726A2.006 2.006 0 003 7.37v9.261c0 .655.318 1.268.853 1.643z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonalPrismIcon;
/* prettier-ignore-end */
