/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandLoomIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandLoomIcon(props: BrandLoomIconProps) {
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
          "M17.464 6.518a6 6 0 10-3.023 7.965m3.041 2.981a6 6 0 10-7.965-3.023M6.54 17.482a6 6 0 103.024-7.965M6.518 6.54a6 6 0 107.965 3.024"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandLoomIcon;
/* prettier-ignore-end */
