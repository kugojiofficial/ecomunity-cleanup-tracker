/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingCircusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingCircusIcon(props: BuildingCircusIconProps) {
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
          "M4 11h16m-8-4.5c0 1-5 4.5-8 4.5m8-4.5c0 1 5 4.5 8 4.5M6 11c-.333 5.333-1 8.667-2 10h4c1 0 4-4 4-9v-1m6 0c.333 5.333 1 8.667 2 10h-4c-1 0-4-4-4-9v-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 7V3l2 1h-2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingCircusIcon;
/* prettier-ignore-end */
