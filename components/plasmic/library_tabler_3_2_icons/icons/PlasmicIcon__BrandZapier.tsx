/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandZapierIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandZapierIcon(props: BrandZapierIconProps) {
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
          "M3 12h6m12 0h-6m-3-9v6m0 6v6M5.636 5.636l4.243 4.243m8.485 8.485l-4.243-4.243m4.243-8.485l-4.243 4.243m-4.242 4.242l-4.243 4.243"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandZapierIcon;
/* prettier-ignore-end */
