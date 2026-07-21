/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Eyeglass2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Eyeglass2Icon(props: Eyeglass2IconProps) {
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
        d={"M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 16.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm-11 0a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Eyeglass2Icon;
/* prettier-ignore-end */
