/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDockerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDockerIcon(props: BrandDockerIconProps) {
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
          "M22 12.54c-1.804-.345-2.701-1.08-3.523-2.94-.487.696-1.102 1.568-.92 2.4.028.238-.32 1-.557 1H3c0 5.208 3.164 7 6.196 7 4.124.022 7.828-1.376 9.854-5 1.146-.101 2.296-1.505 2.95-2.46z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 10h3v3H5v-3zm3 0h3v3H8v-3zm3 0h3v3h-3v-3zM8 7h3v3H8V7zm3 0h3v3h-3V7zm0-3h3v3h-3V4zM4.571 18c1.5 0 2.047-.074 2.958-.78M10 16v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDockerIcon;
/* prettier-ignore-end */
