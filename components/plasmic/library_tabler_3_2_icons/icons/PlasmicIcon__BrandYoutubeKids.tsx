/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandYoutubeKidsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandYoutubeKidsIcon(props: BrandYoutubeKidsIconProps) {
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
          "M18.608 17.75l-3.9.268h-.027a13.83 13.83 0 00-3.722.828l-2.511.908a4.11 4.11 0 01-3.287-.216 3.82 3.82 0 01-1.98-2.527l-1.376-6.05a3.669 3.669 0 01.536-2.86A3.964 3.964 0 014.83 6.44l11.25-2.354c2.137-.448 4.247.85 4.713 2.9l1.403 6.162a3.677 3.677 0 01-.697 3.086 4.007 4.007 0 01-2.89 1.512v.002l-.001.002z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 10l1.208 5 4.292-4L9 10z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandYoutubeKidsIcon;
/* prettier-ignore-end */
