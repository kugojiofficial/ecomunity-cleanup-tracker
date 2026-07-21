/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyBitcoinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyBitcoinIcon(props: CurrencyBitcoinIconProps) {
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
          "M6 6h8a3 3 0 010 6 3 3 0 010 6H6M8 6v12m0-6h6M9 3v3m4-3v3M9 18v3m4-3v3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyBitcoinIcon;
/* prettier-ignore-end */
