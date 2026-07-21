/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExchangeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExchangeOffIcon(props: ExchangeOffIconProps) {
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
        d={"M3 18a2 2 0 104 0 2 2 0 00-4 0zM17 6a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 8v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.978 4.978 0 0114 18h-3l3-3m0 6l-3-3m-6-2v-5c0-1.632.782-3.082 1.992-4M10 6h3l-3-3m1.501 4.499L13 6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ExchangeOffIcon;
/* prettier-ignore-end */
