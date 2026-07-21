/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCucumberIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCucumberIcon(props: BrandCucumberIconProps) {
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
          "M20 10.99c-.01 5.52-4.48 10-10 10.01v-2.26l-.01-.01c-4.28-1.11-6.86-5.47-5.76-9.75a8 8 0 019.74-5.76C17.5 4.13 20 7.35 20 11v-.01zM10.5 8L10 7m3.5 7l.5 1m-5-2.5L8 13m3 1l-.5 1M13 8l.5-1m2.5 5.5l-1-.5m-6-2l-1-.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCucumberIcon;
/* prettier-ignore-end */
