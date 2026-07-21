/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyComplexIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyComplexIcon(props: TopologyComplexIconProps) {
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
          "M20 18a2 2 0 10-4 0 2 2 0 004 0zM8 18a2 2 0 10-4 0 2 2 0 004 0zM8 6a2 2 0 10-4 0 2 2 0 004 0zm12 0a2 2 0 10-4 0 2 2 0 004 0zm-6 6a2 2 0 10-4 0 2 2 0 004 0zM7.5 7.5l3 3M6 8v8m12 0V8M8 6h8m0 12H8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyComplexIcon;
/* prettier-ignore-end */
