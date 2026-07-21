/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingBroadcastTowerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingBroadcastTowerIcon(
  props: BuildingBroadcastTowerIconProps
) {
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
          "M11 12a1 1 0 102 0 1 1 0 00-2 0zm5.616 1.924a5 5 0 10-9.23 0m12.921 1.545a9 9 0 10-16.615 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 21l3-9 3 9m-5-2h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingBroadcastTowerIcon;
/* prettier-ignore-end */
