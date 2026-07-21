/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyBahrainiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyBahrainiIcon(props: CurrencyBahrainiIconProps) {
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
          "M3 10v1a4 4 0 004 4h2a2 2 0 002-2v-3m-4 9.01V19m7-3.99V15m3 0h2a2 2 0 001.649-3.131L17.996 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyBahrainiIcon;
/* prettier-ignore-end */
