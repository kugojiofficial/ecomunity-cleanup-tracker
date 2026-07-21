/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyKroneSwedishIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyKroneSwedishIcon(props: CurrencyKroneSwedishIconProps) {
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
          "M5 6v12m0-6c3.5 0 6-3 6-6m-6 6c3.5 0 6 3 6 6m4-8v8m4-8a4 4 0 00-4 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyKroneSwedishIcon;
/* prettier-ignore-end */
