/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandElasticIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandElasticIcon(props: BrandElasticIconProps) {
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
          "M14 2a5 5 0 015 5c0 .712-.232 1.387-.5 2 1.894.042 3.5 1.595 3.5 3.5 0 1.869-1.656 3.4-3.5 3.5.333.625.5 1.125.5 1.5a2.5 2.5 0 01-2.5 2.5c-.787 0-1.542-.432-2-1-.786 1.73-2.476 3-4.5 3a5 5 0 01-4.583-7 3.5 3.5 0 01-.11-6.992h.195a2.5 2.5 0 012-4c.787 0 1.542.432 2 1 .786-1.73 2.476-3 4.5-3L14 2zM8.5 9l-3-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.5 5l-1 4 1 2 5 2 4-4m-.001 7l-3-.5-1-2.5m.001 6l1-3.5M5.417 15L9.5 11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandElasticIcon;
/* prettier-ignore-end */
