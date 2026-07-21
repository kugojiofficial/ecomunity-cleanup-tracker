/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyRing2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyRing2Icon(props: TopologyRing2IconProps) {
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
          "M14 6a2 2 0 10-4 0 2 2 0 004 0zM7 18a2 2 0 10-4 0 2 2 0 004 0zm14 0a2 2 0 10-4 0 2 2 0 004 0zM7 18h10m1-2l-5-8m-2 0l-5 8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyRing2Icon;
/* prettier-ignore-end */
