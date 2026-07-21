/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarrotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarrotIcon(props: CarrotIconProps) {
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
          "M3 21s9.834-3.489 12.684-6.34a4.487 4.487 0 00-4.887-7.317 4.483 4.483 0 00-1.455.973c-2.86 2.861-6.347 12.689-6.347 12.689L3 21zm6-8l-1.5-1.5M16 14l-2-2m8-4s-1.14-2-3-2c-1.406 0-3 2-3 2s1.14 2 3 2 3-2 3-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M16 2s-2 1.14-2 3 2 3 2 3 2-1.577 2-3c0-1.86-2-3-2-3z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarrotIcon;
/* prettier-ignore-end */
