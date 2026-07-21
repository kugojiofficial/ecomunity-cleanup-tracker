/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CashBanknoteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CashBanknoteOffIcon(props: CashBanknoteOffIconProps) {
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
          "M9.88 9.878a3 3 0 104.242 4.243m.58-3.425a3.012 3.012 0 00-1.412-1.405"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 6h9a2 2 0 012 2v8c0 .294-.064.574-.178.825M18 18H5a2 2 0 01-2-2V8a2 2 0 012-2h1m12 6h.01M6 12h.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CashBanknoteOffIcon;
/* prettier-ignore-end */
