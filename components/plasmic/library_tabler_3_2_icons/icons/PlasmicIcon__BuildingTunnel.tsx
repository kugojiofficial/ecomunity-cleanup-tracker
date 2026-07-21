/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingTunnelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingTunnelIcon(props: BuildingTunnelIconProps) {
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
        d={"M5 21h14a2 2 0 002-2v-7a9 9 0 10-18 0v7a2 2 0 002 2z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 21v-9a4 4 0 118 0v9M3 17h4m10 0h4m0-5h-4M7 12H3m9-9v5M6 6l3 3m6 0l3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingTunnelIcon;
/* prettier-ignore-end */
