/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGooglePhotosIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGooglePhotosIcon(props: BrandGooglePhotosIconProps) {
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
          "M7.5 7C9.985 7 12 8.974 12 11.409V12H3.603a.61.61 0 01-.557-.364.585.585 0 01-.046-.227C3 8.974 5.015 7 7.5 7zm9 10c-2.485 0-4.5-1.974-4.5-4.409V12h8.397c.333 0 .603.265.603.591C21 15.026 18.985 17 16.5 17z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 16.5c0-2.485 1.972-4.5 4.405-4.5H12v8.392a.61.61 0 01-.366.563.585.585 0 01-.229.045C8.972 21 7 18.985 7 16.5zm10-9c0 2.485-1.972 4.5-4.405 4.5H12V3.603a.61.61 0 01.367-.558.583.583 0 01.228-.045C15.028 3 17 5.015 17 7.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGooglePhotosIcon;
/* prettier-ignore-end */
