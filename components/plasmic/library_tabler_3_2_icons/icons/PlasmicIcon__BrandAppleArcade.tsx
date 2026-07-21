/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandAppleArcadeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandAppleArcadeIcon(props: BrandAppleArcadeIconProps) {
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
          "M10 5a2 2 0 104 0 2 2 0 00-4 0zm10 7.5v4.75a.735.735 0 01-.055.325.704.704 0 01-.348.366l-5.462 2.58a5 5 0 01-4.27 0l-5.462-2.58a.705.705 0 01-.401-.691V12.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.431 12.216l5.634-2.332a5.065 5.065 0 013.87 0l5.634 2.332a.693.693 0 01.028 1.269l-5.462 2.543a5.063 5.063 0 01-4.27 0l-5.462-2.543a.691.691 0 01.028-1.269zM12 7v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandAppleArcadeIcon;
/* prettier-ignore-end */
