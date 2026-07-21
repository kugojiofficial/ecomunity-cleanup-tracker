/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandMondayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandMondayIcon(props: BrandMondayIconProps) {
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
          "M18 15.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM9.5 7a1.5 1.5 0 011.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 01-1.271-2.297l3.906-6.827A1.5 1.5 0 019.5 7zm7 0a1.5 1.5 0 011.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 01-1.271-2.297l3.906-6.827A1.5 1.5 0 0116.5 7z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandMondayIcon;
/* prettier-ignore-end */
