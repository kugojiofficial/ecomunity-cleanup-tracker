/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonalPrismOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonalPrismOffIcon(props: HexagonalPrismOffIconProps) {
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
          "M20.792 6.996l-3.775 2.643A2.01 2.01 0 0115.87 10H14m-4 0H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11m8-11v2m0 4v5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.972 16.968a2 2 0 00.028-.337V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0015.633 3H8.367a1.99 1.99 0 00-1.066.309M4.956 4.952l-1.103.774A2.006 2.006 0 003 7.37v9.261c0 .655.318 1.269.853 1.644l3.367 2.363A2 2 0 008.367 21h7.265c.41 0 .811-.126 1.147-.363l2.26-1.587M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HexagonalPrismOffIcon;
/* prettier-ignore-end */
