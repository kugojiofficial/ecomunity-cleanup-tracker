/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPlanetscaleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPlanetscaleIcon(props: BrandPlanetscaleIconProps) {
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
          "M20.993 11.63a9 9 0 01-9.362 9.362l9.362-9.362zM12 3a9.001 9.001 0 018.166 5.211L8.211 20.166A9 9 0 0112 3zm0 9l-6 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPlanetscaleIcon;
/* prettier-ignore-end */
