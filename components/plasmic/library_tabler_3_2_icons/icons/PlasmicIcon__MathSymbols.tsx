/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MathSymbolsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MathSymbolsIcon(props: MathSymbolsIconProps) {
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
          "M3 12h18m-9-9v18m4.5-16.5l3 3m0-3l-3 3M6 4v4M4 6h4m10 10h.01M18 20h.01M4 18h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MathSymbolsIcon;
/* prettier-ignore-end */
