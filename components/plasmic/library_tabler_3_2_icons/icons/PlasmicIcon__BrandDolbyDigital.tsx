/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandDolbyDigitalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandDolbyDigitalIcon(props: BrandDolbyDigitalIconProps) {
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
          "M21 6v12h-.89c-3.34 0-6.047-2.686-6.047-6s2.707-6 6.046-6H21zM3.063 6v12h.891C7.294 18 10 15.314 10 12S7.293 6 3.954 6h-.891z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandDolbyDigitalIcon;
/* prettier-ignore-end */
