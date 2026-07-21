/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyRealIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyRealIcon(props: CurrencyRealIconProps) {
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
          "M21 6h-4a3 3 0 000 6h1a3 3 0 010 6h-4M4 18V6h3a3 3 0 110 6H4c5.5 0 5 4 6 6m8-12V4m-1 16v-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyRealIcon;
/* prettier-ignore-end */
