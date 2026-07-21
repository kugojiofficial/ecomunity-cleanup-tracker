/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ParachuteOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ParachuteOffIcon(props: ParachuteOffIconProps) {
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
          "M22 12c0-5.523-4.477-10-10-10-1.737 0-3.37.443-4.794 1.222m-2.28 1.71A9.97 9.97 0 002 12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M22 12c0-1.66-1.46-3-3.25-3-1.63 0-2.973 1.099-3.212 2.54m-.097-.09c-.23-1.067-1.12-1.935-2.29-2.284m-3.445.568C8.967 10.284 8.5 11.094 8.5 12c0-1.66-1.46-3-3.25-3C3.45 9 2 10.34 2 12m0 0l10 10-3.5-10m6.082 2.624L12 22l4.992-4.992m2.014-2.014l3-3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ParachuteOffIcon;
/* prettier-ignore-end */
