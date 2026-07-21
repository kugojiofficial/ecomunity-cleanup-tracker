/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandOpenaiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandOpenaiIcon(props: BrandOpenaiIconProps) {
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
        d={"M11.217 19.384A3.501 3.501 0 0018 18.167V13l-6-3.35"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5.214 15.014A3.5 3.5 0 009.66 20.28L14 17.746V10.8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 7.63c-1.391-.236-2.787.395-3.534 1.689a3.474 3.474 0 001.271 4.745L8 16.578l6-3.348"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12.783 4.616A3.501 3.501 0 006 5.833V10.9l6 3.45"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18.786 8.986A3.5 3.5 0 0014.34 3.72L10 6.254V13.2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 16.302c1.391.236 2.787-.395 3.534-1.689a3.474 3.474 0 00-1.271-4.745l-4.308-2.514L10 10.774"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandOpenaiIcon;
/* prettier-ignore-end */
