/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlantIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlantIcon(props: PlantIconProps) {
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
          "M7 15h10v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4zm5-6a6 6 0 00-6-6H3v2a6 6 0 006 6h3m0 0a6 6 0 016-6h3v1a6 6 0 01-6 6h-3m0 3V9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlantIcon;
/* prettier-ignore-end */
