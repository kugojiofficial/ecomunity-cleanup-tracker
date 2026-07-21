/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WalletIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WalletIcon(props: WalletIconProps) {
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
          "M17 8V5a1 1 0 00-1-1H6a2 2 0 00-2 2m0 0a2 2 0 002 2h12a1 1 0 011 1v3M4 6v12a2 2 0 002 2h12a1 1 0 001-1v-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20 12v4h-4a2 2 0 010-4h4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WalletIcon;
/* prettier-ignore-end */
