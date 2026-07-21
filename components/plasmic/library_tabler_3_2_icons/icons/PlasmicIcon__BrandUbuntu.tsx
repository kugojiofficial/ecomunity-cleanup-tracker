/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandUbuntuIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandUbuntuIcon(props: BrandUbuntuIconProps) {
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
        d={"M10 5a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.723 7.41a7.992 7.992 0 00-3.74-2.162m-3.971 0a7.993 7.993 0 00-3.789 2.216m-1.881 3.215A8 8 0 004 12.999c0 .738.1 1.453.287 2.132m1.96 3.428a7.993 7.993 0 003.759 2.19m4 0a7.993 7.993 0 003.747-2.186m1.962-3.43a8.008 8.008 0 00.287-2.131c0-.764-.107-1.503-.307-2.203"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M3 17a2 2 0 104 0 2 2 0 00-4 0zm14 0a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandUbuntuIcon;
/* prettier-ignore-end */
