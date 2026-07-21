/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyFullHierarchyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyFullHierarchyIcon(
  props: TopologyFullHierarchyIconProps
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
          "M20 18a2 2 0 10-4 0 2 2 0 004 0zM8 18a2 2 0 10-4 0 2 2 0 004 0zM8 6a2 2 0 10-4 0 2 2 0 004 0zm12 0a2 2 0 10-4 0 2 2 0 004 0zm-6 6a2 2 0 10-4 0 2 2 0 004 0zM6 8v8m12 0V8M8 6h8m0 12H8M7.5 7.5l3 3m3 3l3 3m0-9l-3 3m-3 3l-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyFullHierarchyIcon;
/* prettier-ignore-end */
