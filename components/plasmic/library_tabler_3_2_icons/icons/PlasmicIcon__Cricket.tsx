/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CricketIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CricketIcon(props: CricketIconProps) {
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
          "M11.105 18.79l-1 .992a4.159 4.159 0 01-6.038-5.715l.157-.166L12.506 5.5l1.5 1.5 3.45-3.391a2.08 2.08 0 013.057 2.815l-.116.126L17.006 10l1.5 1.5-3.668 3.617M10.5 7.5l6 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 18a3 3 0 106 0 3 3 0 00-6 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CricketIcon;
/* prettier-ignore-end */
