/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrafficLightsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrafficLightsOffIcon(props: TrafficLightsOffIconProps) {
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
          "M8 4c.912-1.219 2.36-2 4-2a5 5 0 015 5v6m0 4a5 5 0 11-10 0V7m5 1a1 1 0 10-1-1m.291 4.295a1 1 0 001.418 1.41"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 17a1 1 0 102 0 1 1 0 00-2 0zM3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TrafficLightsOffIcon;
/* prettier-ignore-end */
