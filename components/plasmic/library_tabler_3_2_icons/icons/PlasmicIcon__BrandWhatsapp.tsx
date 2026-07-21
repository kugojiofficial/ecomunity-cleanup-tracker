/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandWhatsappIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandWhatsappIcon(props: BrandWhatsappIconProps) {
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
        d={"M3 21l1.65-3.8a9 9 0 113.4 2.9L3 21z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 10a.5.5 0 001 0V9a.5.5 0 10-1 0v1zm0 0a5 5 0 005 5m0 0h1a.5.5 0 000-1h-1a.5.5 0 000 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandWhatsappIcon;
/* prettier-ignore-end */
