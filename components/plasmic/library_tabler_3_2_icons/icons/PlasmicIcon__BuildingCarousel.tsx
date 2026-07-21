/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingCarouselIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingCarouselIcon(props: BuildingCarouselIconProps) {
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
        d={"M6 12a6 6 0 1012 0 6 6 0 00-12 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 8a2 2 0 104 0 2 2 0 00-4 0zm7-4a2 2 0 104 0 2 2 0 00-4 0zm7 4a2 2 0 104 0 2 2 0 00-4 0zM3 16a2 2 0 104 0 2 2 0 00-4 0zm14 0a2 2 0 104 0 2 2 0 00-4 0zm-9 6l4-10 4 10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BuildingCarouselIcon;
/* prettier-ignore-end */
