/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyRiyalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyRiyalIcon(props: CurrencyRiyalIconProps) {
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
          "M15 9v2a2 2 0 01-4 0m0 0v-1m0 1a2 2 0 01-4 0v-1 4a2 2 0 01-4 0v-2m15 .01V12m4-2v1a5 5 0 01-5 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyRiyalIcon;
/* prettier-ignore-end */
