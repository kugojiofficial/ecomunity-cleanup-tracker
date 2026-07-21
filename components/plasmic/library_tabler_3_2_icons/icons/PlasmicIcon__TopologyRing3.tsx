/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyRing3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyRing3Icon(props: TopologyRing3IconProps) {
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
          "M8 18a2 2 0 10-4 0 2 2 0 004 0zm12 0a2 2 0 10-4 0 2 2 0 004 0zm0-12a2 2 0 10-4 0 2 2 0 004 0zM8 6a2 2 0 10-4 0 2 2 0 004 0zM6 8v8m12 0V8M8 6h8m0 12H8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyRing3Icon;
/* prettier-ignore-end */
