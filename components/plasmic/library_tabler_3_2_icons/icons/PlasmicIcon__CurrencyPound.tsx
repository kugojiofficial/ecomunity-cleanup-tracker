/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyPoundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyPoundIcon(props: CurrencyPoundIconProps) {
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
          "M17 18.5a6 6 0 01-5 0 5.998 5.998 0 00-5 .5 3 3 0 002-2.5V9a4 4 0 017.45-2m-2.55 6h-7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyPoundIcon;
/* prettier-ignore-end */
