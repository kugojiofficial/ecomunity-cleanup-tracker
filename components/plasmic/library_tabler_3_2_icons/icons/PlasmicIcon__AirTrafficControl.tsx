/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AirTrafficControlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AirTrafficControlIcon(props: AirTrafficControlIconProps) {
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
          "M11 3h2m-1 0v3M5.998 6h12.004a2 2 0 011.916 2.575l-1.8 6A2 2 0 0116.202 16H7.798a2 2 0 01-1.916-1.425l-1.8-6A2 2 0 015.998 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8.5 6L10 16v5m5.5-15L14 16v5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AirTrafficControlIcon;
/* prettier-ignore-end */
