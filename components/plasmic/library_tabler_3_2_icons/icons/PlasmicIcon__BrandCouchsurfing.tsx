/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCouchsurfingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCouchsurfingIcon(props: BrandCouchsurfingIconProps) {
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
          "M3.1 13c3.267 0 5.9-.167 7.9-.5 3-.5 4-2 4-3.5a3 3 0 00-6 0c0 1.554 1.807 3 3 4s2 2.5 2 3.5a1.5 1.5 0 11-3 0c0-2 4-3.5 7-3.5h2.9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3 12a9 9 0 1018.001 0A9 9 0 003 12z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCouchsurfingIcon;
/* prettier-ignore-end */
