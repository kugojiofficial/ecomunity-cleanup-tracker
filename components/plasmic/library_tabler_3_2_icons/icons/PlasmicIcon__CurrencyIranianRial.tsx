/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyIranianRialIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyIranianRialIcon(props: CurrencyIranianRialIconProps) {
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
          "M9 4v9a2 2 0 01-2 2H6a3 3 0 01-3-3v-1m9-6v8a1 1 0 001 1h1a2 2 0 002-2v-1m5 3v1.096a5 5 0 01-3.787 4.85L17 20m-6-2h.01M14 18h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyIranianRialIcon;
/* prettier-ignore-end */
