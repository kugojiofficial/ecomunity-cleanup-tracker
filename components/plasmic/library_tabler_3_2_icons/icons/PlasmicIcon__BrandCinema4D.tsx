/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCinema4DIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCinema4DIcon(props: BrandCinema4DIconProps) {
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
          "M9.65 6.956a5.39 5.39 0 007.494 7.495M3 12a9 9 0 1018.001 0A9 9 0 003 12zm14.7.137A5.738 5.738 0 1111.963 6.4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.7 12.338v-1.175c0-.47.171-.92.476-1.253a1.56 1.56 0 011.149-.52c.827 0 1.523.676 1.62 1.573.037.344.055.69.055 1.037m-9.338-5.6h1.175c.47 0 .92-.176 1.253-.49.333-.314.52-.74.52-1.184 0-.852-.676-1.57-1.573-1.67A9.497 9.497 0 0012 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCinema4DIcon;
/* prettier-ignore-end */
