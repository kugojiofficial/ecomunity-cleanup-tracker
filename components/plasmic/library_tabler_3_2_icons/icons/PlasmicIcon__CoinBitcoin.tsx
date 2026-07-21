/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinBitcoinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinBitcoinIcon(props: CoinBitcoinIconProps) {
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
        d={"M3 12a9 9 0 1018.001 0A9 9 0 003 12z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 8h4.09c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H9m1-4h4m-4-5v10-9m3-1v1m0 8v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CoinBitcoinIcon;
/* prettier-ignore-end */
