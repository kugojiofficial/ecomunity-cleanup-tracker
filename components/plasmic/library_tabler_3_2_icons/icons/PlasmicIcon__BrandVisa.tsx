/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandVisaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandVisaIcon(props: BrandVisaIconProps) {
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
          "M21 15l-1-6-2.5 6M9 15l1-6M3 9h1v6h.5L7 9m9 .5a.5.5 0 00-.5-.5h-.75c-.721 0-1.337.521-1.455 1.233l-.09.534A1.058 1.058 0 0014.25 12a1.059 1.059 0 011.045 1.233l-.09.534A1.476 1.476 0 0113.75 15H13a.5.5 0 01-.5-.5M18 14h2.7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandVisaIcon;
/* prettier-ignore-end */
