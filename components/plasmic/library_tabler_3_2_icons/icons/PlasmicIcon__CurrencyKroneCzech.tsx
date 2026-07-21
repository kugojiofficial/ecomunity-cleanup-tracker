/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyKroneCzechIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyKroneCzechIcon(props: CurrencyKroneCzechIconProps) {
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
          "M5 6v12m0-6c3.5 0 6-3 6-6m-6 6c3.5 0 6 3 6 6m8-12l-2 2-2-2m4 6h-2a3 3 0 000 6h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyKroneCzechIcon;
/* prettier-ignore-end */
