/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BracesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BracesIcon(props: BracesIconProps) {
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
          "M7 4a2 2 0 00-2 2v3c0 .796-.21 1.559-.586 2.121C4.04 11.684 3.53 12 3 12c.53 0 1.04.316 1.414.879C4.79 13.44 5 14.204 5 15v3a2 2 0 002 2M17 4a2 2 0 012 2v3c0 .796.21 1.559.586 2.121.375.563.884.879 1.414.879-.53 0-1.04.316-1.414.879C19.21 13.44 19 14.204 19 15v3a2 2 0 01-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BracesIcon;
/* prettier-ignore-end */
