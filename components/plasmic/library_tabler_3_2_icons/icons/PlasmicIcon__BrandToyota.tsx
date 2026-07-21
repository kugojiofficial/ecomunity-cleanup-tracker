/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandToyotaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandToyotaIcon(props: BrandToyotaIconProps) {
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
          "M2 12c0 1.857 1.054 3.637 2.929 4.95C6.804 18.263 9.348 19 12 19s5.196-.738 7.071-2.05C20.946 15.637 22 13.857 22 12c0-1.857-1.054-3.637-2.929-4.95C17.196 5.737 14.652 5 12 5s-5.196.737-7.071 2.05C3.054 8.363 2 10.143 2 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 12c0 3.866 1.343 7 3 7s3-3.134 3-7-1.343-7-3-7-3 3.134-3 7z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.678-.525-1.304-1.41-1.806"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandToyotaIcon;
/* prettier-ignore-end */
