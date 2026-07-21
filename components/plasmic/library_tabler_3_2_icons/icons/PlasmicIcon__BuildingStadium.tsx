/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingStadiumIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingStadiumIcon(props: BuildingStadiumIconProps) {
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
          "M4 12c0 .53.843 1.04 2.343 1.414C7.843 13.79 9.878 14 12 14s4.157-.21 5.657-.586C19.157 13.04 20 12.53 20 12c0-.53-.843-1.04-2.343-1.414C16.157 10.21 14.122 10 12 10s-4.157.21-5.657.586C4.843 10.96 4 11.47 4 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 12v7c0 .94 2.51 1.785 6 2v-3h4v3c3.435-.225 6-1.07 6-2v-7m-5-6h4V3h-4v7M7 6h4V3H7v7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingStadiumIcon;
/* prettier-ignore-end */
