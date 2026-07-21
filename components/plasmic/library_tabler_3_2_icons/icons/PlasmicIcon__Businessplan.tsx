/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BusinessplanIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BusinessplanIcon(props: BusinessplanIconProps) {
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
          "M11 6c0 .796.527 1.559 1.464 2.121.938.563 2.21.879 3.536.879s2.598-.316 3.535-.879C20.473 7.56 21 6.796 21 6s-.527-1.559-1.465-2.121C18.598 3.316 17.326 3 16 3s-2.598.316-3.536.879C11.527 4.44 11 5.204 11 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 000 3h1a1.5 1.5 0 110 3H3m2 0v1m0-8v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BusinessplanIcon;
/* prettier-ignore-end */
