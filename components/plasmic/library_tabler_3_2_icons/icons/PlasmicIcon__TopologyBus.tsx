/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TopologyBusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TopologyBusIcon(props: TopologyBusIconProps) {
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
          "M14 10a2 2 0 10-4 0 2 2 0 004 0zm-8 0a2 2 0 10-4 0 2 2 0 004 0zm16 0a2 2 0 10-4 0 2 2 0 004 0zM2 16h20M4 12v4m8-4v4m8-4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TopologyBusIcon;
/* prettier-ignore-end */
