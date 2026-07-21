/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransactionBitcoinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransactionBitcoinIcon(props: TransactionBitcoinIconProps) {
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
          "M15 12h4.09c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H15m1-4h4m-4-5v10-9m3-1v1m0 8v1M3 5a2 2 0 104 0 2 2 0 00-4 0zm12 0a2 2 0 104 0 2 2 0 00-4 0zM7 5h8M7 5v8a3 3 0 003 3h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TransactionBitcoinIcon;
/* prettier-ignore-end */
