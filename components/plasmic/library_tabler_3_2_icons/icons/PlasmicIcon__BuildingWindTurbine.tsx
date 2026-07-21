/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingWindTurbineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingWindTurbineIcon(props: BuildingWindTurbineIconProps) {
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
        d={"M10 11a2 2 0 104 0 2 2 0 00-4 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 11V8.427c0-.18.013-.358.04-.536l.716-4.828C10.82 2.466 11.353 2 12 2s1.18.466 1.244 1.063l.716 4.828c.027.178.04.357.04.536V11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13.01 9.28l2.235 1.276c.156.09.305.19.446.3l3.836 2.911c.487.352.624 1.04.3 1.596-.325.556-1 .782-1.548.541l-4.555-1.68a3.625 3.625 0 01-.486-.231l-2.235-1.277"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M13 12.716l-2.236 1.277a3.625 3.625 0 01-.485.23l-4.555 1.681c-.551.241-1.223.015-1.548-.54-.324-.557-.187-1.245.3-1.597l3.836-2.91c.14-.112.29-.212.446-.3l2.235-1.277M7 21h10m-7 0l1-7m2 0l1 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingWindTurbineIcon;
/* prettier-ignore-end */
