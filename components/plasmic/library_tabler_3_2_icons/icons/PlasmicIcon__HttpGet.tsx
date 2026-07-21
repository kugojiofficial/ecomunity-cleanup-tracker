/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HttpGetIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HttpGetIcon(props: HttpGetIconProps) {
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
          "M7 8H5a2 2 0 00-2 2v4a2 2 0 002 2h2v-4H6m8-4h-4v8h4m-4-4h2.5M17 8h4m-2 0v8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HttpGetIcon;
/* prettier-ignore-end */
