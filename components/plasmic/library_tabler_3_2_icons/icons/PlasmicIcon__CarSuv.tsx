/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarSuvIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarSuvIcon(props: CarSuvIconProps) {
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
          "M5 17a2 2 0 104 0 2 2 0 00-4 0zm11 0a2 2 0 104 0 2 2 0 00-4 0zM5 9l2-4h7.438a2 2 0 011.94 1.515L17 9h3a2 2 0 012 2v3M10 9V5M2 7v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M22.001 14.001A4.992 4.992 0 0018 12a4.992 4.992 0 00-4 2h-3a4.999 4.999 0 00-8.003.003"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 12V9h13"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarSuvIcon;
/* prettier-ignore-end */
