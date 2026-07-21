/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaceMaskOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaceMaskOffIcon(props: FaceMaskOffIconProps) {
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
          "M5 14.5h-.222C3.243 14.5 2 13.38 2 12s1.243-2.5 2.778-2.5H5m14 5h.222C20.756 14.5 22 13.38 22 12s-1.244-2.5-2.778-2.5H19M9 10h1m4 0h1m-6 4h5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 15V8.51a2 2 0 00-1.45-1.923l-5-1.429a2 2 0 00-1.1 0l-1.788.511m-3.118.891l-.094.027A2 2 0 005 8.509v6.982a2 2 0 001.45 1.923l5 1.429a2 2 0 001.1 0l4.899-1.4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FaceMaskOffIcon;
/* prettier-ignore-end */
