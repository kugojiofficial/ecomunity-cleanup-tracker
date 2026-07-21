/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyStarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyStarIcon(props: TopologyStarIconProps) {
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
          "M8 18a2 2 0 10-4 0 2 2 0 004 0zM20 6a2 2 0 10-4 0 2 2 0 004 0zM8 6a2 2 0 10-4 0 2 2 0 004 0zm12 12a2 2 0 10-4 0 2 2 0 004 0zm-6-6a2 2 0 10-4 0 2 2 0 004 0zM7.5 7.5l3 3m-3 6l3-3m3 0l3 3m0-9l-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyStarIcon;
/* prettier-ignore-end */
